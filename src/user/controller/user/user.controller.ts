import { Controller, Get, Post, Delete, Body, Param, Put } from "@nestjs/common";
import { UserService } from "../../service/user/user.service";
import { UserDto } from "../../dto/user.dto/user.dto";
import { DeleteResult, UpdateResult } from "typeorm";

@Controller("users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() user: UserDto): Promise<UserDto> {
		return this.userService.create(user);
	}

	@Get()
	findAll(): Promise<UserDto[]> {
		return this.userService.findAll();
	}

	@Get("/:id")
	findOneByID(@Param("id") id: number): Promise<UserDto> {
		return this.userService.findOneByID(id);
	}

	@Put("/:id")
	updateOneByID(@Param("id") id: number, @Body() user: UserDto): Promise<UpdateResult> {
		return this.userService.updateOneByID(id, user);
	}

	@Delete("/:id")
	deleteOneByID(@Param("id") id: number): Promise<DeleteResult> {
		return this.userService.deleteOneByID(id);
	}

}
