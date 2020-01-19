import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, Length } from "class-validator";
import Category from "../category/entity";

@Entity()
export default class Type extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(1, 8)
  @Column("text")
  ac_type: string;

  @OneToMany(
    () => Category,
    category => category.type
  )
  categories: Category[];
}
