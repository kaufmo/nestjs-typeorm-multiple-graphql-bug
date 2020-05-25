import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Admin {
  @Field(() => ID)
  id: number;

  @Field()
  adminField: string;
}
