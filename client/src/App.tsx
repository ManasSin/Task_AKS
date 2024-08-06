import { useEffect, useState } from "react";
import { api, endPoint } from "./lib/axios";
import { Course } from "./types";
import { Projects } from "./components/CoursesCard";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(
    courses ? courses : []
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const response = await api
        .get(endPoint.course)
        .then((response) => response.data);
      setCourses(response);
    };
    fetchCourses();
    setLoading(false);
  }, []);

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
    console.log(searchTerm);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        welcome to course platform
      </h1>
      <div className="">
        <button className="bg-blue-500 px-5 py-2 leading-3 tracking-wide text-white rounded-sm">
          Get courses
        </button>
      </div>
      <section className="mt-10 max-w-2xl w-full ms-10">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-sm px-4 py-2 w-full"
          onChange={(e) => handleSearch(e)}
        />
      </section>
      {loading ? (
        <p>Loading...</p>
      ) : (
        courses.length > 0 && (
          <Projects
            courses={filteredCourses.length > 0 ? filteredCourses : courses}
          />
        )
      )}
    </>
  );
}

export default App;
