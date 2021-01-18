import { InputType,Field} from '@nestjs/graphql';

@InputType() //input type!!!!
export class UserInput {
  @Field()
  readonly email: string;
}