import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { IsString, Length } from "class-validator";
import { IsDecimal } from "class-validator";

@Entity()
export default class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(1, 8)
  @Column("text")
  ac_type: string;

  @IsString()
  @Length(1, 200)
  @Column("text")
  ac_desc: string;

  @IsDecimal()
  @Column("decimal")
  ac_amount: number;

  @Column("timestamp")
  ac_date: Date;
}
