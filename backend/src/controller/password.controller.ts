/* eslint-disable */

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PasswordService } from "../services/password.service";
import { Password } from "@prisma/client";

@Controller("passwords")
export class PasswordController {
  constructor(private passwordService: PasswordService) {}

  @Get()
  async getPasswords(): Promise<Password[]> {
    return this.passwordService.getPasswords();
  }

  @Get("/:origin_id/:user_id")
  async getPasswordById(
    @Param("origin_id") origin_id: string,
      @Param("user_id") user_id: string
  ): Promise<Password>{
    return this.passwordService.getPasswordById(Number(origin_id), Number(user_id));
  }

  @Get("/gen")
  async generatePassword(): Promise<string> {
    const generatedPassword: string = await this.passwordService.generatePassword();
    return JSON.stringify({ password: generatedPassword });
  }

  @Post()
  async postPassword(@Body() data: Password): Promise<Password> {
    return this.passwordService.postPassword(data);
  }

  @Put("/:origin_id/:user_id")
  async editPassword(@Param("origin_id") origin_id: string, @Param("user_id") user_id: string, @Body() data: Password): Promise<Password> {
    return this.passwordService.editPassword(Number(origin_id), Number(user_id), data);
  }

  @Delete("/:origin_id/:user_id")
  async deletePassword(@Param("origin_id") origin_id: string, @Param("user_id") user_id: string): Promise<Password> {
    return this.passwordService.deletePassword(Number(origin_id), Number(user_id));
  }
}
