import { CreateDateColumn } from "typeorm";


export class DateTime {
  @CreateDateColumn()
  createAt!:Date;

  @CreateDateColumn()
  updateAt!:Date;

}
