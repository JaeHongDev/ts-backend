import express from "express";
import { AuthProvider } from "../providers/auth.provider";

type postLoginOrJoinFormData = {
  email: string;
  password: string;
};

export const joinController = async (
  req: express.Request,
  res: express.Response
) => {
  const { email, password }: postLoginOrJoinFormData = req.body;

  await new AuthProvider().createNewUser(email, password);

  res.send({ data: "success" });
};

export const loginController = async (
  req: express.Request,
  res: express.Response
) => {
  const { email, password }: postLoginOrJoinFormData = req.body;

  const firstUser = await new AuthProvider().findUserByEmail(email);
  res.send(firstUser);
};
