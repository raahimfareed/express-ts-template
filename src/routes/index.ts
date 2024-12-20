import { Router } from "express";
import { exampleRouter } from "./example-route";

const router = Router();

router.use('/', exampleRouter);

export { router };
