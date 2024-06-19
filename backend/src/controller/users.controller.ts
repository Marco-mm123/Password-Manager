/*eslint-disable */

import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { User } from "@prisma/client";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() data: User): Promise<User>{
    return this.usersService.createUser(data);
  }
}