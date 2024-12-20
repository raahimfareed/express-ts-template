import { Router } from "express";
import { helloWorld } from "../controllers/example-controller";

const exampleRouter = Router();

exampleRouter.get('/hello', helloWorld);

export { exampleRouter };
