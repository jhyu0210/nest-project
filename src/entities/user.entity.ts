import { BeforeInsert, Column, Entity } from 'typeorm';
import { IsEmail } from 'class-validator';
import { classToPlain, Exclude } from 'class-transformer';
import { AbstractEntity } from './abstract-entity';
import * as bcrypt from 'bcryptjs';
@Entity()
export class UserEntity extends AbstractEntity {
  @Column()
  @IsEmail()
  email: string;

  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  toJSON() {
    return classToPlain(this);
  }
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }
}