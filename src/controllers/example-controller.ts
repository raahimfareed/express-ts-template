import { Request, Response } from "express";

export const helloWorld = (request: Request, response: Response) => {
  response.status(200).json({
    "message": "Hello, World"
  });
  return;
}
