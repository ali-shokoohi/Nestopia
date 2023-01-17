import { Controller, Get, Post, Delete, Body, Param, Put, HttpException, HttpStatus } from "@nestjs/common";
import { UserService } from "../../service/user/user.service";
import { UserDto } from "../../dto/user.dto/user.dto";
import { DeleteResult, UpdateResult } from "typeorm";
import * as RxJS from 'rxjs';

@Controller("users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() user: UserDto): RxJS.Observable<UserDto> {
		return RxJS.from(this.userService.create(user))
		.pipe(
			RxJS.catchError(error => 
				RxJS.merge(
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => error instanceof HttpException),
						RxJS.mergeMap(error => RxJS.throwError(error)),
					),
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => !(error instanceof HttpException)),
						RxJS.mergeMap(error =>
							RxJS.throwError(() => new HttpException(
								{
             				     statusCode: '500',
               					   message: 'Something Went Wrong',
                  					error: 'Internal Server Erroreee'
                					}, HttpStatus.INTERNAL_SERVER_ERROR)
							))
						)
					)
				)
				);
	}

	@Get()
	findAll(): RxJS.Observable<UserDto[]>{
		return RxJS.from(this.userService.findAll())
		.pipe(
			RxJS.catchError(error => 
				RxJS.merge(
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => error instanceof HttpException),
						RxJS.mergeMap(error => RxJS.throwError(error)),
					),
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => !(error instanceof HttpException)),
						RxJS.mergeMap(error =>
							RxJS.throwError(() => new HttpException(
								{
             				     statusCode: '500',
               					   message: 'Something Went Wrong',
                  					error: 'Internal Server Erroreee'
                					}, HttpStatus.INTERNAL_SERVER_ERROR)
							))
						)
					)
				)
				);
	}

	@Get("/:id")
	findOneByID(@Param("id") id: number): RxJS.Observable<UserDto> {
		return RxJS.from(this.userService.findOneByID(id))
		.pipe(
			RxJS.catchError(error => 
				RxJS.merge(
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => error instanceof HttpException),
						RxJS.mergeMap(error => RxJS.throwError(error)),
					),
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => !(error instanceof HttpException)),
						RxJS.mergeMap(error =>
							RxJS.throwError(() => new HttpException(
								{
             				     statusCode: '500',
               					   message: 'Something Went Wrong',
                  					error: 'Internal Server Erroreee'
                					}, HttpStatus.INTERNAL_SERVER_ERROR)
							))
						)
					)
				)
				);
	}

	@Put("/:id")
	updateOneByID(@Param("id") id: number, @Body() user: UserDto): RxJS.Observable<UpdateResult> {
		return RxJS.from(this.userService.updateOneByID(id, user))
		.pipe(
			RxJS.catchError(error => 
				RxJS.merge(
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => error instanceof HttpException),
						RxJS.mergeMap(error => RxJS.throwError(error)),
					),
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => !(error instanceof HttpException)),
						RxJS.mergeMap(error =>
							RxJS.throwError(() => new HttpException(
								{
             				     statusCode: '500',
               					   message: 'Something Went Wrong',
                  					error: 'Internal Server Erroreee'
                					}, HttpStatus.INTERNAL_SERVER_ERROR)
							))
						)
					)
				)
				);
	}

	@Delete("/:id")
	deleteOneByID(@Param("id") id: number): RxJS.Observable<DeleteResult> {
		return RxJS.from(this.userService.deleteOneByID(id))
		.pipe(
			RxJS.catchError(error => 
				RxJS.merge(
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => error instanceof HttpException),
						RxJS.mergeMap(error => RxJS.throwError(error)),
					),
					RxJS.of(error)
					.pipe(
						RxJS.filter(error => !(error instanceof HttpException)),
						RxJS.mergeMap(error =>
							RxJS.throwError(() => new HttpException(
								{
             				     statusCode: '500',
               					   message: 'Something Went Wrong',
                  					error: 'Internal Server Erroreee'
                					}, HttpStatus.INTERNAL_SERVER_ERROR)
							))
						)
					)
				)
				);
	}

}
