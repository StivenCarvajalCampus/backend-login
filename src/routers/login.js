import { Router } from "express";
import { getLogin } from "../support/login";
import routesVersioning from "express-routes-versioning";

const appLogin=Router();
const version = routesVersioning();

appLogin.get('/login',version(getLogin));

export default appLogin;