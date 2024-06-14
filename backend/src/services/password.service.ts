/*eslint-disable*/

import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Prisma, Password } from "@prisma/client";
import { PasswordAddDto } from "../Dto/password-add";

@Injectable()

export class PasswordService {

  constructor(private prisma: PrismaService) { }

  async getPasswords(): Promise<Password[]> {
    return this.prisma.password.findMany({});
  }

  async postPassword(data: PasswordAddDto): Promise<Password> {
    return this.prisma.password.create({
      data: {
        password: data.password,
        user_id: data.user_id,
        origin_id: data.origin_id
      }
    });
  }
}