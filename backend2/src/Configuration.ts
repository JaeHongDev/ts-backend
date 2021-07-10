import dotenv from "dotenv";
dotenv.config();

export class Configuration {}

export namespace Configuration {
  export const port = process.env.PORT;
}
