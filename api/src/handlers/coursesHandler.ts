import { Request, Response } from "express";

const fakeCourseData = [
  {
    id: 1,
    title: "Course 1",
    details: "Details 1",
    price: 100,
    autherName: "Author 1",
    duration: 10,
    publishedAt: new Date(),
  },
  {
    id: 2,
    title: "Course 2",
    details: "Details 2",
    price: 200,
    autherName: "Author 2",
    duration: 20,
    publishedAt: new Date(),
  },
  {
    id: 3,
    title: "Course 3",
    details: "Details 3",
    price: 300,
    autherName: "Author 3",
    duration: 30,
    publishedAt: new Date(),
  },
  {
    id: 4,
    title: "Course 4",
    details: "Details 4",
    price: 400,
    autherName: "Author 4",
    duration: 40,
    publishedAt: new Date(),
  },
];

export function getCourses(req: Request, res: Response) {
  return res.status(200).send(fakeCourseData);
}
