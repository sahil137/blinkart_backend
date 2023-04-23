import { CreateCategoryBody } from '@custom-types/category';
import ErrorHandler from '@errors/base.error';
import Category from '@models/category-schema';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import slugify from 'slugify';

export const createCategory = async (
  req: Request<{}, {}, CreateCategoryBody>,
  res: Response
) => {
  const { name } = req.body;
  const category = await new Category({
    name,
    slug: slugify(name).toLowerCase(),
  }).save();
  res.status(StatusCodes.OK).json({
    category,
    success: true,
    message: 'Category created successfully',
  });
};

export const getAllCategories = async (req: Request, res: Response) => {
  const categoryList = await Category.find({}).sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json({
    items: categoryList,
    success: true,
  });
};

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { slug } = req.params;
  const category = await Category.findOne({ slug });
  if (!category)
    return next(
      new ErrorHandler(
        StatusCodes.NOT_FOUND,
        `No Category with slug: ${slug} found`
      )
    );
  return res.status(StatusCodes.OK).json({
    category,
    success: true,
  });
};

export const updateCategory = async (
  req: Request<{ id: string }, {}, { name: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await Category.findById(id);
  if (!category)
    return next(new ErrorHandler(StatusCodes.NOT_FOUND, 'Category not found'));
  const newCategory = await Category.findByIdAndUpdate(
    id,
    {
      $set: {
        name,
        slug: slugify(name),
      },
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json({
    category: newCategory,
    success: true,
    message: 'Category Updated Successfully',
  });
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  if (!category)
    return next(new ErrorHandler(StatusCodes.NOT_FOUND, 'Category not found'));
  await Category.findByIdAndDelete(id);
  return res.status(StatusCodes.OK).json({
    message: `Category ${category.name} deleted successfully`,
  });
};
