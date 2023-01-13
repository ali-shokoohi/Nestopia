import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import ConnectionOptions from "./ormconfig";

@Module({
  imports: [
	  TypeOrmModule.forRoot(ConnectionOptions),
	  UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
