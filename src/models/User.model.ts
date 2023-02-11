import { Schema, model } from 'mongoose';
import { UserInterface } from 'interfaces';
import { UserRoles } from 'types';

const userSchema = new Schema<UserInterface>(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      maxLength: [30, 'First Name can be max 30 characters'],
      minLength: [2, 'First Name can be min 3 characters'],
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      maxLength: [30, 'Last Name can be max 30 characters'],
      minLength: [2, 'Last Name can be min 3 characters'],
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      requred: true,
      minLength: 6,
    },
    resetPasswordToken: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: [UserRoles.CUSTOMER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN],
      default: UserRoles.CUSTOMER,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model('User', userSchema);
export default User;
