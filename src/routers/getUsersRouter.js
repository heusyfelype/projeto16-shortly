import { Router } from "express";

import { validGetUsers } from "../middlewares/validGetUsers.js";
import { getUsersController } from "../controllers/getUsersController.js";

const getUsersRouter = Router();

getUsersRouter.get("/users/:id", validGetUsers, getUsersController);

export default getUsersRouter;