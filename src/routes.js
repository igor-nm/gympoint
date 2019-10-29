import { Router } from "express";

import Authentication from "./app/middlewares/Authentication";

import UserController from "./app/controllers/UserController";
import StudentController from "./app/controllers/StudentController";
import SessionController from "./app/controllers/SessionController";

const routes = Router();

routes.post("/sessions", SessionController.store);

routes.use(Authentication);

routes.put("/users", UserController.update);
routes.post("/users", UserController.store);

routes.get("/students", StudentController.index);
routes.put("/students", StudentController.update);
routes.post("/students", StudentController.store);

export default routes;
