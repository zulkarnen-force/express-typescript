import { Router, Request, Response } from "express";
import User from "../models/User";
import UserController from "../controllers/UserController";
const UserRouter = Router();

const userController = new UserController(new User());

UserRouter.get("/", async (req: Request, res: Response) => {
  const users = await userController.list();
  return res.json(users);
});

UserRouter.get("/:id", async (req: Request, res: Response) => {
  const userId = req.params.id;
  return await userController.findOne(userId);
});

UserRouter.post("/", (req: Request, res: Response) => {});

export default UserRouter;
