import { BeforeInsert, Column, Entity } from 'typeorm';
import { IsEmail } from 'class-validator';
import { classToPlain, Exclude } from 'class-transformer';
import { AbstractEntity } from './abstract-entity';
import * as bcrypt from 'bcryptjs';
import { UserResponse } from 'src/models/user.model';

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
}
