import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	name: string;

	@Column({ nullable: false })
	email: string;

	@Column({ nullable: false })
	username: string;

	@Column({ nullable: false })
	password: string;

}
