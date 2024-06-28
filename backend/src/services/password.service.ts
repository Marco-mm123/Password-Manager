import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Password } from '@prisma/client';
import * as generator from 'generate-password';

@Injectable()
export class PasswordService {
  // Inject the PrismaService into the PasswordService
  constructor(private prisma: PrismaService) {}

  // fetches all Passwords from the database
  async getPasswords(): Promise<Password[]> {
    return this.prisma.password.findMany({});
  }

  // fetches a single Password from the database by its id
  async getPasswordById(origin_id: number, user_id: number): Promise<Password> {
    return this.prisma.password.findUnique({
      where: { origin_id_user_id: { origin_id, user_id } },
    });
  }

  // fetches a single Password from the database by its user id
  async getPasswordByUser(user_id: number): Promise<Password[]> {
    return this.prisma.password.findMany({
      where: { user_id },
    });
  }

  // creates a new Password in the database
  async postPassword(data: Password): Promise<Password> {
    return this.prisma.password.create({
      data: {
        password: data.password,
        user_id: data.user_id,
        origin_id: data.origin_id,
      },
    });
  }

  // edits a Password from the database by its id
  async editPassword(
    origin_id: number,
    user_id: number,
    data: Password,
  ): Promise<Password> {
    return this.prisma.password.update({
      where: { origin_id_user_id: { origin_id, user_id } },
      data,
    });
  }

  // generates a new passwordString
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
