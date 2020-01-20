import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import Category from "../category/entity";
import { IsDecimal } from "class-validator";
import { IsString, Length } from "class-validator";

@Entity()
export default class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsDecimal()
  @Column("decimal")
  ac_amount: number;

  @Column("date")
  ac_date: Date;

  @IsString()
  @Length(1, 200)
  @Column("text")
  ac_remark: string;

  @ManyToOne(
    () => Category,
    category => category.accounts
  )
  category: Category;
}
