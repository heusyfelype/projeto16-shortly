import { Router } from "express";

import { teste } from "../controllers/teste.js";

const testRoute = Router();

console.log("teste no router")
testRoute.get('/teste', teste);

export default testRoute;