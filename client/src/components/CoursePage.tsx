import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { api, endPoint } from "../lib/axios";
import { Course } from "../types";
import { setCourseEnrolledIn } from "../slice/StudentSlice";
import { useDispatch, useSelector } from "react-redux";

export const CoursePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const courseList: Course[] = useSelector((state: any) => state.course.values);
  const [courses, setCourses] = useState<Course | null>(null);

  const [success, setSuccess] = useState<string>("");

  useEffect(() => {
    const fetchCourses = async () => {
      const response = courseList.filter(
        (course: Course) => course.id === Number(id)
      );
      setCourses(response[0]);
    };
    fetchCourses();
  }, [courseList, id]);

  const handleEnroll = () => {
    if (courses !== null) {
      dispatch(setCourseEnrolledIn({ courses: courses, id: courses?.id }));
      setSuccess("Enrolled Successfully");
    } else {
      setSuccess("There was an error");
    }
  };

  //   if (error) return <div className="text-black font-bold text-xl">{error}</div>;
  return (
    <div className="min-h-screen flex flex-col gap-y-7 max-w-4xl px-5 mx-auto my-10">
      <img
        className="w-full h-64 object-cover"
        src="https://picsum.photos/200"
        alt="course image"
      />
      <h1 className="text-3xl font-bold mt-4">{courses?.title}</h1>
      <p className="mt-4">{courses?.description}</p>

      <button
        onClick={() => handleEnroll()}
        className="px-4 py-3 rounded-lg bg-blue-900 text-white hover:bg-blue-600 "
      >
        {success.length > 0 ? success : "Enroll in this course"}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 row-span-[minmax(min-content, 10rem)] gap-4 my-10 p-5 rounded-sm shadow-sm border">
        <div className="col-span-1 flex flex-col gap-2 items-start justify-start bg-blue-200 rounded-sm p-4 h-fit">
          <h2 className="text-xl font-bold leading-3">Prerequisites</h2> {"-"}
          <p className="mt-2 leading-3">{courses?.prerequisites}</p>
        </div>

        <div className="col-start-2 flex flex-col col-span-1 gap-2 items-start justify-between bg-blue-200 rounded-sm p-4 h-fit">
          <h2 className="text-xl font-bold leading-3">Published At</h2> {"-"}
          <p className="mt-2 leading-3">{courses?.publishedAt}</p>
        </div>

        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 items-start justify-between bg-blue-200 rounded-sm p-4">
            <h2 className="text-xl font-bold">Course Details</h2>
            <p className="mt-2">Course Length - {courses?.duration}</p>
            <p className="mt-2">Auther Name: {courses?.autherName}</p>
            <p className="mt-2">
              Enrollment Status: {courses?.enrollmentStatus}
            </p>
            <p className="mt-2">Location: {courses?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
