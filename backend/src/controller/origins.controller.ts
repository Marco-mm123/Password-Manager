/* eslint-disable */

import { Controller, Get, Post, Body, Delete, Param, Put, UseGuards } from "@nestjs/common";
import { OriginsService } from "../services/origins.service";
import { Origin } from "@prisma/client";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

// controller for the origins
@Controller('origins')
export class OriginsController {
  constructor(private originsService: OriginsService) {}

  // @UseGuards is a decorator that tells the controller to use the JwtAuthGuard
  //gets all the origins from the DB
  @UseGuards(JwtAuthGuard)
  @Get()
  getOrigins(): Promise<Origin[]> {
    return this.originsService.getOrigins();
  }

  //gets a single origin by its id
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  getOriginById(@Param('id') id: string): Promise<Origin> {
    return this.originsService.getOriginById(Number(id));
  }

  //creates a new origin
  @UseGuards(JwtAuthGuard)
  @Post()
  createOrigin(@Body() origin: Origin): Promise<Origin> {
    return this.originsService.createOrigin(origin);
  }

  //deletes an origin by its id
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  deleteOrigin(@Param('id') id: number): Promise<Origin> {
    return this.originsService.deleteOrigin(id);
  }

  //edits an origin by its id
  @UseGuards(JwtAuthGuard)
  @Put(":id")
  editOrigin(@Param('id') id: string, @Body() origin): Promise<Origin>{
    return this.originsService.editOrigin(Number(id), origin);
  }
}