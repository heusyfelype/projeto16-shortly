import { Router } from "express";

import { validPostSignIn } from "../middlewares/validPostSignIn.js";
import { signInController } from "../controllers/signInController.js";

const postSignInRouter = Router();

postSignInRouter.post("/signin", validPostSignIn, signInController );

export default postSignInRouter;