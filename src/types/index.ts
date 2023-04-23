export { UserRoles } from './role';
export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}
