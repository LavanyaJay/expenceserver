import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, Length } from "class-validator";
import Type from "../type/entity";
import Account from "../account/entity";

@Entity()
export default class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(1, 200)
  @Column("text")
  ac_category: string;

  @ManyToOne(
    () => Type,
    type => type.categories
  )
  type: Type;

  @OneToMany(
    () => Account,
    account => account.category
  )
  accounts: Account[];
}
