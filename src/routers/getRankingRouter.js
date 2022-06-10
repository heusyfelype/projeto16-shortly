import { Router } from "express";

import { getRankingController } from "../controllers/getRankingController.js";

const getRankingRouter = Router();

getRankingRouter.get('/ranking', getRankingController);

export default getRankingRouter;