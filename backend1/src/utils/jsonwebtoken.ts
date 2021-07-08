import jwt from "jsonwebtoken";
import { Configuration } from "../Configuration";
import { User } from "../entity/user/user";

export const sign = (obj: User | undefined) => {
  const { password : temp, ...user } = obj;
  return jwt.sign(user, Configuration.secretOrkey, { expiresIn: "1day" });
};

export const verify = (token: string) => {
  return jwt.verify(token, Configuration.secretOrkey);
};
