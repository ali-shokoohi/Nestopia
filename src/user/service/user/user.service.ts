import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
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
	create(user: UserDto): Promise<UserDto> {
		return this.userRepository.save(user);
	}

	// A method for getting all users from database
	findAll(): Promise<UserDto[]> {
		return this.userRepository.find();
	}

	// A mothod for getting one user from database
	findOneByID(id: number): Promise<UserDto> {
		return this.userRepository.findOneBy(
			{
				id: id
			}
		)
	}

	// A mothod for updating one user from database
	updateOneByID(id: number, user: UserDto): Promise<UpdateResult> {
		return this.userRepository.update(
			{
				id: id
			},
			user
		)
	}

	// A mothod for deleting one user from database
	deleteOneByID(id: number): Promise<DeleteResult> {
		return this.userRepository.delete(
			{
				id: id
			}
		)
	}
}
