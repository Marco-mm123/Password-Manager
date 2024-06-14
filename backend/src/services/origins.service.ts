import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Origin, Prisma } from '@prisma/client';

@Injectable()
export class OriginsService {
  constructor(private prisma: PrismaService) {}

  async getOrigins(): Promise<Origin[]> {
    return this.prisma.origin.findMany({});
  }

  async createOrigin(data: Prisma.OriginCreateInput): Promise<Origin> {
    return this.prisma.origin.create({ data });
  }

  async deleteOrigin(id: number) {
    return this.prisma.origin.delete({
      where: {
        origin_id: Number(id),
      },
    });
  }
}
