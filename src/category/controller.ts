import { JsonController, Body, Post, Get } from "routing-controllers";
import Category from "../category/entity";

@JsonController()
export default class CategoryController {
  @Post("/category")
  async createCategory(@Body() category: Category) {
    const entity = await Category.create({ ...category });
    return entity.save();
  }
  @Get("/category")
  async allCategory() {
    const category = await Category.find();
    return { category: category };
  }
}
