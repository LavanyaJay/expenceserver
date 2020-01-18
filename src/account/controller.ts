import { JsonController, Body, Post, Get } from "routing-controllers";
import Account from "../account/entity";

@JsonController()
export default class AccountController {
  @Post("/account")
  async createAccount(@Body() account: Account) {
    const entity = await Account.create(account);
    return entity.save();
  }
  @Get("/accounts")
  async allAccounts() {
    const account = await Account.find();
    return { account: account };
  }
}
