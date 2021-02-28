import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import { classToPlain, Exclude } from 'class-transformer';
import { AbstractEntity } from './abstract-entity';
import * as bcrypt from 'bcryptjs';
import { UserResponse } from 'src/models/user.model';
import { ArticleEntity } from './article.entity';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column()
  @IsEmail()
  email: string;

  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: null, nullable: true })
  image: string | null;

  @ManyToMany((type) => UserEntity, (user) => user.followee)
  @JoinTable()
  followers: UserEntity[];

  @ManyToMany((type) => UserEntity, (user) => user.followers)
  followee: UserEntity[];

  @OneToMany((type) => ArticleEntity, (article) => article.author)
  articles: ArticleEntity;

  @ManyToMany((type) => ArticleEntity, (article) => article.favoritedBy)
  favorites: ArticleEntity[];

  toJSON(): UserResponse {
    return <UserResponse>classToPlain(this);
  }
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
  async comparePassword(attempt: string) {
    console.log('Attempt password ', attempt);
    const validOrInvalid = await bcrypt.compare(attempt, this.password);
    console.log('Valid Or Invlaid::: ', validOrInvalid);
    return validOrInvalid;
  }
  toProfile(user?: UserEntity) {
    let following = null; // true or false setting, so initially null;
    if (user) {
      console.log('>>>toProfoile user?:: ', user);
      console.log('this.followers::', this.followers);
      following = this.followers.includes(user);
      console.log('>>>following :::', following);
    }
    const profile: any = this.toJSON();
    delete profile.followers;
    return { ...profile, following };
  }
}
