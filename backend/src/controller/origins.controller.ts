/* eslint-disable */

import { Controller, Get, Post, Body, Delete, Param, Put, UseGuards } from "@nestjs/common";
import { OriginsService } from "../services/origins.service";
import { Origin } from "@prisma/client";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('origins')
export class OriginsController {
  constructor(private originsService: OriginsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getOrigins(): Promise<Origin[]> {
    return this.originsService.getOrigins();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  getOriginById(@Param('id') id: string): Promise<Origin> {
    return this.originsService.getOriginById(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createOrigin(@Body() origin: Origin): Promise<Origin> {
    return this.originsService.createOrigin(origin);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  deleteOrigin(@Param('id') id: number): Promise<Origin> {
    return this.originsService.deleteOrigin(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  editOrigin(@Param('id') id: string, @Body() origin): Promise<Origin>{
    return this.originsService.editOrigin(Number(id), origin);
  }
}