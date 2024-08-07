// import { Course } from "../types";

import { useEffect, useState } from "react";
import { Course } from "../types";
import { useSelector } from "react-redux";
import { CoursesCard } from "./CoursesCard";

// type Props = {
//   courses: Course[];
// };

export const Courses = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const courses: Course[] = useSelector((state: any) => state.course.values);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(
    courses ? courses : []
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const filterCouse = (searchTerm: string) => {
      if (searchTerm.length > 0) {
        const result = courses.filter((course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCourses(result);
      } else if (searchTerm.length === 0) {
        setFilteredCourses(courses);
      }
    };

    filterCouse(searchTerm);
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searching = e.target.value;
    setTimeout(() => {
      setSearchTerm(searching);
    }, 500);
  };
  // console.log(courses);
  return (
    <main className="flex flex-col items-center mx-auto bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="max-w-6xl">
        <div id="courses" className="flex flex-col gap-y-10 items-start mx-3">
          <section className="mt-10 max-w-2xl w-full ">
            <label
              htmlFor="search"
              className="text-lg text-white font-semibold"
            >
              Search for the course you want
            </label>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-sm px-4 py-2 w-full"
              onChange={(e) => handleSearch(e)}
            />
          </section>
          {courses.length > 0 && (
            <CoursesCard
              courses={filteredCourses.length > 0 ? filteredCourses : courses}
            />
          )}
        </div>
      </div>
    </main>
  );
};
