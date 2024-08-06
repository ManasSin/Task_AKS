import { useEffect, useState } from "react";
import { api, endPoint } from "../lib/axios";
import { Course } from "../types";
import { Hero } from "./Hero";

// type Props = {}

export const Home = () => {
  const [courses, setCourses] = useState<Course[]>([]); // eslint-disable-line

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await api
        .get(endPoint.course)
        .then((response) => response.data);
      setCourses(response);
      localStorage.setItem("courses", JSON.stringify(response));
    };
    fetchCourses();
  }, []);

  return (
    <>
      <main className="flex flex-col items-center mx-auto bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-6xl">
          <Hero />
        </div>
      </main>
    </>
  );
};
