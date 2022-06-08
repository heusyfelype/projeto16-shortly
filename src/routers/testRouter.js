import { Router } from "express";

import { teste } from "../controllers/teste.js";

const testRoute = Router();

testRoute.get('/teste', teste);

export default testRoute;