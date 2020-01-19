import { JsonController, Body, Param, Post, Get } from "routing-controllers";
import Category from "../category/entity";
import Type from "../type/entity";

@JsonController()
export default class CategoryController {
  @Post("/type/:id/category")
  async createCategory(
    @Param("id") typeId: number,
    @Body() category: Category
  ) {
    const type = await Type.findOne(typeId);
    const entity = await Category.create({ ...category, type });
    return entity.save();
  }
  @Get("/type/:id/category")
  async allCategory(@Param("id") typeId: number) {
    const type = await Type.findOne(typeId);
    const category = await Category.find({ where: { type } });
    return { category: category };
  }
}
