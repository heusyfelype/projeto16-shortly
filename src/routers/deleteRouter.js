import { Router } from "express";

import { validAuthorization } from "../middlewares/validAuthorization.js";
import { deleteUrlsController } from "../controllers/deleteUrlsController.js";

const deleteRouter = Router();

deleteRouter.delete("/urls/:id", validAuthorization, deleteUrlsController);

export default deleteRouter;