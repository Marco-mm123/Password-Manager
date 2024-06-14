/* eslint-disable */

import { Body, Controller, Get, Post } from "@nestjs/common";
import { PasswordService } from "../services/password.service";
import { PasswordAddDto } from "../Dto/password-add";
import { Password } from "@prisma/client";

@Controller("passwords")
export class PasswordController {
  constructor(private passwordService: PasswordService) {}

  @Get()
  async getPasswords(): Promise<Password[]> {
    return this.passwordService.getPasswords();
  }

  @Post()
  async postPassword(@Body() data: PasswordAddDto): Promise<Password> {
    return this.passwordService.postPassword(data);
  }
}
