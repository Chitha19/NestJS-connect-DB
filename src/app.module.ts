import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/controller/user/user.controller';
import { UserService } from './user/services/user/user.service';
import { Connection } from 'typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'student',
      entities: [],
      synchronize: true,
    }),UserModule],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
