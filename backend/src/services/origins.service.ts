import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Origin, Prisma } from '@prisma/client';

// @Injectable() is a decorator that marks a class as a provider.
// Gets called by the Controller to get the data from the database
@Injectable()
export class OriginsService {
  // The PrismaService is injected into the OriginsService
  constructor(private prisma: PrismaService) {}

  // fetches all users from the database
  async getOrigins(): Promise<Origin[]> {
    return this.prisma.origin.findMany({});
  }

  // fetches a single user from the database by its id
  async getOriginById(id: number): Promise<Origin> {
    return this.prisma.origin.findUnique({
      where: { origin_id: id },
    });
  }

  // creates a new user in the database
  async createOrigin(data: Prisma.OriginCreateInput): Promise<Origin> {
    return this.prisma.origin.create({ data });
  }

  // deletes a user from the database by its id
  async deleteOrigin(id: number): Promise<Origin> {
    return this.prisma.origin.delete({
      where: {
        origin_id: Number(id),
      },
    });
  }

  // edits a user in the database by its id
  async editOrigin(
    id: number,
    data: Prisma.OriginUpdateInput,
  ): Promise<Origin> {
    return this.prisma.origin.update({
      where: { origin_id: id },
      data,
    });
  }
}
