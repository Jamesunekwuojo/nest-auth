import { InputType, Int, Field, InputType } from '@nestjs/graphql';

import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';

@InputType()
export class SignUpInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  username: string;

  @IsNotEmpty()
  IsString()
  @Field()
  email: string;

  @IsNotEmpty()
  IsString()
  @Field()
  pass: string;

  @IsNotEmpty()
  IsString()
  @Field()
  password: string;
}

