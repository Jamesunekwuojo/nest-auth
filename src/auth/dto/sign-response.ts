import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '../../user/user.entity';

import {IsString, IsNotEmpty} from 'class-validator';

@ObjectType()
export class SignInResponse {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => User)
  user: User;
}
