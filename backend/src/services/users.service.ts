import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // Inject the PrismaService into the UsersService
  constructor(private prisma: PrismaService) {}

  // fetches all users from the database
  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  // creates a new user in the database
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    data.password = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({ data });
  }
}
