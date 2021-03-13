import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();
/**
 * the express async handler was introduced here to handle error.
 * Otherwise, on error, the page won't respond at all.
 * Errors will be redirected to server.js error handler
 * */
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;
