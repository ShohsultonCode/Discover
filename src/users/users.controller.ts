import { Controller, Get, Req, Body, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { fileUploadInterceptor } from 'src/utils/file.catch';
import UploadedFileInter from 'src/auth/entities/file.catch';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { IsNumber } from 'class-validator';
import { productSeachDto } from 'src/admin/dto/product.seach.dto';
import { nameDto } from './dto/name.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }


  // Get name from user
  @Post('register')
  getName(@Body() nameDto: nameDto) {
    return this.usersService.getName(nameDto);
  }




}



