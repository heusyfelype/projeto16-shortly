import { Router } from "express";

import { getUsersController } from "../controllers/getUsersController.js";
import {validAuthorization} from "../middlewares/validAuthorization.js";

const getUsersRouter = Router();

getUsersRouter.get("/users/:id", validAuthorization, getUsersController);

export default getUsersRouter;