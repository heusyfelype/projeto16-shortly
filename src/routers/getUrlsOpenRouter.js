import { Router } from "express";

import { getUrlsOpenController } from "../controllers/getUrlsOpenController.js";

const getUrlsOpenRouter = Router();

getUrlsOpenRouter.get("/urls/open/:shortUrl", getUrlsOpenController);

export default getUrlsOpenRouter