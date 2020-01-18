import { JsonController, Get, Param, Body, Post } from "routing-controllers";
import Account from "../account/entity";

@JsonController()
export default class AccountController {
  @Post("/account")
  async createAccount(@Body() account: Account) {
    const entity = await Account.create(account);
    return entity.save();
  }
}
