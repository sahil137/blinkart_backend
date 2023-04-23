import express from 'express';
import {
  createCategory,
  getAllCategories,
  getOne,
  deleteCategory,
  updateCategory,
} from '@controllers/index';
import { adminCheck, authCheck } from '@middlewares/index';
import TryCatch from '@utils/try-catch';
import { createCategoryValidator } from '@validators/category';
import { runValidation } from '@validators/index';

const router = express.Router();

router.post(
  '/',
  authCheck,
  adminCheck,
  createCategoryValidator,
  runValidation,
  TryCatch(createCategory)
);
router.get('/get-all', TryCatch(getAllCategories));
router.get('/get/:slug', TryCatch(getOne));

router.patch('/:id', authCheck, adminCheck, TryCatch(updateCategory));

router.delete('/:id', authCheck, adminCheck, TryCatch(deleteCategory));
export default router;
