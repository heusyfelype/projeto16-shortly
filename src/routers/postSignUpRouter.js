import { Router } from "express";


import { validPostSignUp } from "../middlewares/validPostSignUp.js";

const postSignUpRouter = Router();

postSignUpRouter.post('/signup', validPostSignUp)

export default postSignUpRouter