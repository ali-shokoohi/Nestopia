import { IsString, IsNumber, IsNotEmpty } from "class-validator";
export class UserDto {

	@IsNumber()
	id?: number;

	@IsString()
	name: string;

	@IsString()
	email: string;

	@IsString()
	username: string;

	@IsString()
	password?: string;
}
