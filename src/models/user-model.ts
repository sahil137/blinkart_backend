import { UserRoles } from '@custom-types/index';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      enum: [UserRoles.CUSTOMER, UserRoles.ADMIN, UserRoles.SUPER_ADMIN],
      default: UserRoles.CUSTOMER,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
