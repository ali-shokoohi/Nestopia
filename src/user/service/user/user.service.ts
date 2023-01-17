import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as RxJS from 'rxjs';
import { UserEntity } from "src/user/entity/user.entity/user.entity";
import { Repository, DeleteResult, UpdateResult } from "typeorm";
import { UserDto } from "../../dto/user.dto/user.dto";

@Injectable()
export class UserService {
	constructor (
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>
	){}

	// A method for creating a user object into database
	create(user: UserDto): RxJS.Observable<UserDto> {
		return RxJS.from(this.userRepository.save(user))
		.pipe(
			RxJS.tap({
				    next: result => console.debug(`create user success: ${result}`),
        			error: err => console.error(`create user failed:`, err)
			}),
			RxJS.catchError(_ => RxJS.throwError(() => new HttpException(
				{
					status: 500,
					message: 'Something Went Wrong',
          			error: 'Internal Server Error'
				},
				HttpStatus.INTERNAL_SERVER_ERROR
			))),
			RxJS.mergeMap(result => 
				RxJS.merge(
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !queryResult),
						RxJS.mergeMap(_ => RxJS.throwError(() => new HttpException (
							{
								status: 400,
								message: "User Not Created",
								error: "Bad Request"
							},
							HttpStatus.BAD_REQUEST
						)))
					),
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !!queryResult),
						RxJS.identity
					)
				)
			)
		);
	}

	// A method for getting all users from database
	findAll(): RxJS.Observable<UserDto[]> {
		return RxJS.from(this.userRepository.find())
		.pipe(
			RxJS.tap({
				    next: result => console.debug(`findAll users success: ${result}`),
        			error: err => console.error(`findAll users failed:`, err)
			}),
			RxJS.catchError(_ => RxJS.throwError(() => new HttpException(
				{
					status: 500,
					message: 'Something Went Wrong',
          			error: 'Internal Server Error'
				},
				HttpStatus.INTERNAL_SERVER_ERROR
			))),
			RxJS.mergeMap(result => 
				RxJS.merge(
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !queryResult),
						RxJS.mergeMap(_ => RxJS.throwError(() => new HttpException (
							{
								status: 404,
								message: "Users Not Found",
								error: "Not Found"
							},
							HttpStatus.NOT_FOUND
						)))
					),
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !!queryResult),
						RxJS.identity
					)
				)
			)
		);
	}

	// A mothod for getting one user from database
	findOneByID(id: number): RxJS.Observable<UserDto> {
		return RxJS.from(this.userRepository.findOneBy(
			{
				id: id
			}))
		.pipe(
			RxJS.tap({
				    next: result => console.debug(`findOneByID user success: ${result}`),
        			error: err => console.error(`findOneByID user failed:`, err)
			}),
			RxJS.catchError(_ => RxJS.throwError(() => new HttpException(
				{
					status: 500,
					message: 'Something Went Wrong',
          			error: 'Internal Server Error'
				},
				HttpStatus.INTERNAL_SERVER_ERROR
			))),
			RxJS.mergeMap(result => 
				RxJS.merge(
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !queryResult),
						RxJS.mergeMap(_ =>
							RxJS.throwError(() => new HttpException (
							{
								status: 404,
								message: "User Not Found",
								error: "Not Found"
							},
							HttpStatus.NOT_FOUND
						)))
					),
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !!queryResult),
						RxJS.identity
					)
				)
			)
		);
	}

	// A mothod for updating one user from database
	updateOneByID(id: number, user: UserDto): RxJS.Observable<UpdateResult> {
		return RxJS.from(this.userRepository.update(
			{
				id: id
			},
			user
		))
		.pipe(
			RxJS.tap({
				    next: result => console.debug(`findOneByID user success: ${result}`),
        			error: err => console.error(`findOneByID user failed:`, err)
			}),
			RxJS.catchError(_ => RxJS.throwError(() => new HttpException(
				{
					status: 500,
					message: 'Something Went Wrong',
          			error: 'Internal Server Error'
				},
				HttpStatus.INTERNAL_SERVER_ERROR
			))),
			RxJS.mergeMap(result => 
				RxJS.merge(
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !queryResult),
						RxJS.mergeMap(_ =>
							RxJS.throwError(() => new HttpException (
							{
								status: 404,
								message: "User Not Found",
								error: "Not Found"
							},
							HttpStatus.NOT_FOUND
						)))
					),
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !!queryResult),
						RxJS.identity
					)
				)
			)
		);
	}

	// A mothod for deleting one user from database
	deleteOneByID(id: number): RxJS.Observable<DeleteResult> {
		return RxJS.from(this.userRepository.delete(
			{
				id: id
			}
		))
		.pipe(
			RxJS.tap({
				    next: result => console.debug(`findOneByID user success: ${result}`),
        			error: err => console.error(`findOneByID user failed:`, err)
			}),
			RxJS.catchError(_ => RxJS.throwError(() => new HttpException(
				{
					status: 500,
					message: 'Something Went Wrong',
          			error: 'Internal Server Error'
				},
				HttpStatus.INTERNAL_SERVER_ERROR
			))),
			RxJS.mergeMap(result => 
				RxJS.merge(
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !queryResult),
						RxJS.mergeMap(_ =>
							RxJS.throwError(() => new HttpException (
							{
								status: 404,
								message: "User Not Found",
								error: "Not Found"
							},
							HttpStatus.NOT_FOUND
						)))
					),
					RxJS.of(result)
					.pipe(
						RxJS.filter(queryResult => !!queryResult),
						RxJS.identity
					)
				)
			)
		);
	}
}
