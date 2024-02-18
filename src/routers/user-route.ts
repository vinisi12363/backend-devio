import { Router } from "express";
import { userController } from "@/controller/user-controller";

const userRoute = Router();

userRoute.get("/", userController.getUsers);
userRoute.post("/", userController.postUser);

export { userRoute };
