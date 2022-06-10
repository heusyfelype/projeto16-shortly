import { Router } from "express";

import { validPostShorten } from "../middlewares/validPostShorten.js";
import { postShortenController } from "../controllers/postShortenController.js";
import { validAuthorization } from "../middlewares/validAuthorization.js";

const postShortenRouter = Router();

postShortenRouter.post("/urls/shorten", validAuthorization, validPostShorten, postShortenController);

export default postShortenRouter;