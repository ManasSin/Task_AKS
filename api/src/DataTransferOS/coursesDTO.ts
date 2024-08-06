import { ErrorRequestHandler } from "express";

export const errorInterceptor: ErrorRequestHandler = (err, req, res, next) => {
  console.error("middleware Error");
  const errorStatus = err.status || 503;
  const errorMessage = err.message || "Something went wrong in the middleware";

  res.status(errorStatus).send({
    error: errorMessage,
    status: errorStatus,
    message: errorMessage,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next(err);
};
