import { Router } from "express";


import { validPostSignUp } from "../middlewares/validPostSignUp.js";
import { signUpcontroller } from "../controllers/signUpcontroller.js";

const postSignUpRouter = Router();

postSignUpRouter.post('/signup', validPostSignUp, signUpcontroller);

export default postSignUpRouter