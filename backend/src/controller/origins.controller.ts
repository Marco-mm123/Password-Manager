/* eslint-disable */

import { Controller, Get, Post, Body, Delete, Param, Put } from "@nestjs/common";
import { OriginsService } from "../services/origins.service";
import { Origin } from "@prisma/client";

@Controller('origins')
export class OriginsController {
  constructor(private originsService: OriginsService) {}

  @Get()
  getOrigins(): Promise<Origin[]> {
    return this.originsService.getOrigins();
  }

  @Get(":id")
  getOriginById(@Param('id') id: string): Promise<Origin> {
    return this.originsService.getOriginById(Number(id));
  }

  @Post()
  createOrigin(@Body() origin: Origin): Promise<Origin> {
    return this.originsService.createOrigin(origin);
  }

  @Delete(":id")
  deleteOrigin(@Param('id') id: number): Promise<Origin> {
    return this.originsService.deleteOrigin(id);
  }

  @Put(":id")
  editOrigin(@Param('id') id: string, @Body() origin): Promise<Origin>{
    return this.originsService.editOrigin(Number(id), origin);
  }
}