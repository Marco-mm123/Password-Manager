/* eslint-disable */

import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { OriginsService } from "../services/origins.service";
import { OriginsAddDto } from "../Dto/origins-add";

@Controller('origins')
export class OriginsController {
  constructor(private originsService: OriginsService) {}

  @Get()
  getOrigins() {
    return this.originsService.getOrigins();
  }

  @Post()
  createOrigin(@Body() origin: OriginsAddDto) {
    return this.originsService.createOrigin(origin);
  }

  @Delete(":id")
  deleteOrigin(@Param('id') id: number) {
    return this.originsService.deleteOrigin(id);
  }
}