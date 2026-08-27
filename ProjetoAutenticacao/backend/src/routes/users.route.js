import UsersController from "../controllers/usersController.js";
import express from "express";

const userRoute = express.Router();

userRoute.get("/", UsersController.getUsers);
userRoute.post("/", UsersController.createUser);

export default userRoute;
