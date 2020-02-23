import {
  JsonController,
  Body,
  Post,
  Get,
  Param,
  Delete
} from "routing-controllers";
import { getRepository } from "typeorm";
import Account from "../account/entity";
import Category from "../category/entity";

@JsonController()
export default class AccountController {
  @Post("/cat/:id/account")
  async createAccount(@Param("id") catId: number, @Body() account: Account) {
    const category = await Category.findOne({
      where: { id: catId }
    });

    const entity = await Account.create({ ...account, category });

    return entity.save();
  }
  @Get("/date/:txnDate/accounts")
  async allAccounts(@Param("txnDate") tDate: string) {
    /* const account = await Account.find({ where: { ac_date: tDate } }); */
    const account = await getRepository(Account)
      .createQueryBuilder("acc")
      .select("acc.category_id")
      .addSelect("acc.id")
      .addSelect("acc.ac_amount")
      .addSelect("acc.ac_date")
      .addSelect("acc.ac_remark")
      .where("ac_date=:ac_date", { ac_date: tDate })
      .getRawMany();

    return { account: account };
  }
  @Delete("/accounts/:id")
  async delAccount(@Param("id") id: number) {
    const account = await Account.delete({ id: id });
    return { account: account };
  }
  @Get("/accounts/pie/:monthNo")
  async calcAccounts(@Param("monthNo") monthNo: number) {
    console.log("month ", monthNo);
    const account = await getRepository(Account)
      .createQueryBuilder("acc")
      .select("acc.category_id")
      .addSelect("SUM(acc.ac_amount)", "sum")
      .where("EXTRACT(MONTH FROM ac_date)=:monthId", { monthId: monthNo })
      .groupBy("category_id")
      .getRawMany();

    return { chart: account };
  }
}
