import { UserRoles } from 'types';

export default interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRoles;
  resetPasswordToken: string;
}
