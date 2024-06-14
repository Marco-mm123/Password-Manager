/*eslint-disable */

import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { UsersAddDto} from "../Dto/user-add";
import { User } from "@prisma/client";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() data: UsersAddDto): Promise<User>{
    return this.usersService.createUser(data);
  }
}