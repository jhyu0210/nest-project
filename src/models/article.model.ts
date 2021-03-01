import {
  IsArray,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateArticleDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  body: string;

  @IsArray()
  tagList: string[];
}

// export class RegisterDTO extends LoginDTO {
//   @IsString()
//   @MinLength(4)
//   @MaxLength(20)
//   username: string;
// }

export class UpdateArticleDTO {
  @IsString()
  @IsOptional()
  title: string;

  @IsOptional()
  @IsString()
  body: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tagList: string[];
}

export interface FindFeedQuery {
  limit?: number;
  offset?: number;
}

export interface FindAllQuery extends FindFeedQuery {
  tag?: string;
  author?: string;
  favorited?: string;
}

// export interface UserResponse {
//   email: string;
//   username?: string;
//   bio: string;
//   image: string | null;
// }

// export interface AuthResponse extends UserResponse {
//   token: string;
// }

// export interface ProfileResponse extends UserResponse {
//   following: boolean | null;
// }
