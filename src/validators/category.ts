import { check } from 'express-validator';

export const createCategoryValidator = [
  check('name')
    .isString()
    .notEmpty()
    .withMessage('Please Provide name for category')
    .isLength({ min: 2, max: 32 }),
];
