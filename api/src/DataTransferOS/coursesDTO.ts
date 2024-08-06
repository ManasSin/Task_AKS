import { ErrorRequestHandler } from "express";

export const errorInterceptor: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = err.message || "Something went wrong in the middleware";

  res.status(statusCode).send({
    error: message,
    status: statusCode,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next(err);
};
