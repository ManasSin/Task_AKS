import express from "express";
import courseRouter from "./routes/courses";
import { errorInterceptor } from "./DataTransferOS/coursesDTO";

const app = express();

app.listen(process.env.PORT || 3000, () =>
  console.log("Server started on port 3000")
);

app.use("/api/courses", errorInterceptor, courseRouter);
