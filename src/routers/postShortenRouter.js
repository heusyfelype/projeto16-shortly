import { Router } from "express";

import { validPostShorten } from "../middlewares/validPostShorten.js";
import { postShortenController } from "../controllers/postShortenController.js";

const postShortenRouter = Router();

postShortenRouter.post("/urls/shorten", validPostShorten, postShortenController);

export default postShortenRouter;