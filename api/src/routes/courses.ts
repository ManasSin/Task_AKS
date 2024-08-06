import { Router } from "express";
import { getCourses } from "../handlers/coursesHandler";

const router = Router();

router.get("/", getCourses);

export default router;
