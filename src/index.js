import express, {json} from "express";
import cors from 'cors';
import dotenv from 'dotenv';



import testRoute from './routers/testRouter.js';
import postSignUpRouter from './routers/postSignUpRouter.js';
import postSignInRouter from './routers/postSignInRouter.js';
import postShortenRouter from './routers/postShortenRouter.js';
import getUrlsIdRouter from './routers/getUrlsIdRouter.js';



dotenv.config();
const app = express();
app.use(cors());
app.use(json());

app.use(testRoute);
app.use(postSignUpRouter);
app.use(postSignInRouter);
app.use(postShortenRouter);
app.use(getUrlsIdRouter);

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});