import { Schema, Types } from 'mongoose';

export enum UserRole {
  User = 'user',
  Admin = 'admin',
}

const UsersSchema: Schema = new Schema(
  {
    user_first_name: {
      type: String,
      required: true,
    },
    user_last_name: {
      type: String,
      required: true,
    },
    user_username: {
      type: String,
      required: true,
    },
    user_password: {
      type: String,
      required: true,
    },
    // user_location: {
    //   type: String,
    //   default: 'Your location',
    // },
    user_image: {
      type: String,
      required: true,
      default: 'user.png',
    },
    // user_payment: {
    //   type: Number,
    //   required: true,
    //   default: 100000,
    // },
    user_last_login_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    user_isactive: {
      type: Boolean,
      required: true,
      default: true,
    },
    // user_subjects: [{
    //   type: Types.ObjectId,
    //   ref: 'Subject', // Replace 'Subject' with your actual subject schema name
    // }],
    // user_groups: [{
    //   type: Types.ObjectId,
    //   ref: 'Group', // Replace 'Group' with your actual group schema name
    // }],
    user_role: {
      type: String,
      required: true,
      default: "admin"
    },
  },
  {
    timestamps: true,
  }
);

export default UsersSchema;