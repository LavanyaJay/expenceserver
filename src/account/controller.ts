import { JsonController, Body, Post, Get, Param } from "routing-controllers";
import Account from "../account/entity";
import Category from "../category/entity";

@JsonController()
export default class AccountController {
  @Post("/cat/:id/account")
  async createAccount(@Param("id") catId: number, @Body() account: Account) {
    const category = await Category.findOne(catId);
    const entity = await Account.create({ ...account, category });
    return entity.save();
  }
  @Get("/accounts")
  async allAccounts() {
    const account = await Account.find();
    return { account: account };
  }
}
