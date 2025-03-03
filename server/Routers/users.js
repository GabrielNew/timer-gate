import express from "express";
import { User } from "../Models/user.js";

const userRouter = new express.Router();

userRouter.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();

    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

export { userRouter };
