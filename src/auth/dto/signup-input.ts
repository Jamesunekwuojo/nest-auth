/* eslint-disable @typescript-eslint/no-unsafe-call */
import { InputType, Field } from '@nestjs/graphql';

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignUpInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  password: string;
}
