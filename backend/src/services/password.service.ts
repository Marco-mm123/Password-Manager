/*eslint-disable*/

import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Password } from "@prisma/client";
import * as generator from "generate-password";
import * as bcypt from "bcrypt"

@Injectable()

export class PasswordService {

  constructor(private prisma: PrismaService) { }

  async getPasswords(): Promise<Password[]> {
    return this.prisma.password.findMany({});
  }

  async getPasswordById(origin_id: number, user_id: number): Promise<Password> {
    return this.prisma.password.findUnique({
      where: {origin_id_user_id: { origin_id, user_id }}
    });
  }

  async postPassword(data: Password): Promise<Password> {
    const hashedPassword = await bcypt.hash(data.password, 10)
    return this.prisma.password.create({
      data: {
        password: hashedPassword,
        user_id: data.user_id,
        origin_id: data.origin_id
      }
    });
  }

  async editPassword(origin_id: number, user_id: number, data: Password): Promise<Password> {
    return this.prisma.password.update({
      where: {origin_id_user_id: { origin_id, user_id }},
      data
    });
  }

  async deletePassword(origin_id: number, user_id: number): Promise<Password> {
    return this.prisma.password.delete({
      where: {origin_id_user_id: { origin_id, user_id }}
    });
  }

  async generatePassword(): Promise<string> {
    return generator.generate({
      length: 20,
      numbers: true,
      symbols: false,
      uppercase: true,
      lowercase: true,
    });
  }
}