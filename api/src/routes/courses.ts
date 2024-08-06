import { Router } from "express";
import { getCourseById, getCourses } from "../handlers/coursesHandler";

const router = Router();

router.get("/", getCourses);
router.get("/:id", getCourseById);

export default router;
