import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { Course } from "./types";
import { api, endPoint } from "./lib/axios";
import { setCourses as setGlobalCourses } from "./slice/CourseSlice";
import { useDispatch } from "react-redux";

function App() {
  const [serverResponse, setServerResponse] = useState<boolean>(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const response: Course[] = await api
        .get(endPoint.course)
        .then((response) => response.data)
        .catch((error) => {
          console.log(error);
          setServerResponse(true);
        });
      localStorage.setItem("courses", JSON.stringify(response) || "[]");
      setCourses(response);
      dispatch(setGlobalCourses(response));
    };
    fetchCourses();
    setLoading(false);
  }, []);
  if (serverResponse === true)
    return (
      <div className="text-rose-500 font-bold text-3xl">
        Server is not responding please check server
      </div>
    );
  return (
    <>
      <Navbar />
      {loading ? <div>Loading</div> : <Outlet context={courses} />}
    </>
  );
}

export default App;
