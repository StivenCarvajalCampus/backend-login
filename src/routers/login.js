import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import { getLogin } from "../support/login.js";

const appLogin=Router();
const version = routesVersioning();

appLogin.get('/login', version(getLogin));
export default appLogin;