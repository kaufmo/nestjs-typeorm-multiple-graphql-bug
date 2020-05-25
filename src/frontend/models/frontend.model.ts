import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Frontend {
  @Field(() => ID)
  id: number;

  @Field()
  frontendField: string;
}
