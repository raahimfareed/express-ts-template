import { NextFunction, Request, Response } from "express";

export const routeLogger = (request: Request, _: Response, next: NextFunction) => {
  console.log(request.path, request.method);
  next();
}
