import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import mongoose from 'mongoose';
import { Model } from 'mongoose';
import { Benefit, Category, Like, Product, UserCategory, Save, User, Sells, Carts } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose'
import { productSeachDto } from 'src/admin/dto/product.seach.dto';
import { nameDto } from './dto/name.dto';

//ss}
@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly Users: Model<User>,
  ) { }



  async getName(body: nameDto): Promise<object> {
    const newUser = new this.Users({
      user_name: body.user_name,
      user_subject: body.user_subject
    });


    await newUser.save();

    return {
      message: 'Success',
      statusCode: 200,
    };
  }



}





