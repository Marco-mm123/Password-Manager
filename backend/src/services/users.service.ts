/*eslint-disable */

import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Prisma, User } from "@prisma/client";

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }
}