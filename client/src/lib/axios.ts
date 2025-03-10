import axios from "axios";

export const api = axios.create({
  //   baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const endPoint = {
  course: "api/courses",
  courseId: "api/courses/:id",
};
