import { Router } from "express";

import { getUrlsIdController } from "../controllers/getUrlsIdController.js";

const getUrlsIdRouter = Router();

getUrlsIdRouter.get("/urls/:id", getUrlsIdController);

export default getUrlsIdRouter