import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import Category from "../category/entity";
import { IsDecimal } from "class-validator";

@Entity()
export default class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsDecimal()
  @Column("decimal")
  ac_amount: number;

  @Column("timestamp")
  ac_date: Date;

  @ManyToOne(
    () => Category,
    category => category.accounts
  )
  category: Category;
}
