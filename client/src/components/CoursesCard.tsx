import { Course } from "../types";
import { useDispatch } from "react-redux";
import { setCompletedCourse } from "../slice/StudentSlice";
import { useState } from "react";
import { dateDifference } from "../utils";
import Card from "./Card";

type Props = {
  courses: Course[] | Course;
  isCompleted?: boolean;
  id?: number;
};

export const CoursesCard = ({ courses, isCompleted, id: courseId }: Props) => {
  const dispatch = useDispatch();
  const isCourseArray = Array.isArray(courses);
  const [success, setSuccess] = useState<string>("");

  const handleMarkComplete = () => {
    if (courseId !== undefined) dispatch(setCompletedCourse({ id: courseId }));
    setSuccess("Marked Complete");
  };

  const timeBefore = dateDifference(
    new Date(isCourseArray ? courses[0].publishedAt : courses.publishedAt),
    new Date()
  );
  if (isCourseArray) {
    return (
      <div
        key={Math.random() * 10}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[minmax(200px,auto)] max-w-7xl mx-auto gap-y-2 gap-x-2"
      >
        {courses?.map(
          ({ id, title, description, autherName, price, duration }: Course) => (
            <Card
              autherName={autherName}
              description={description}
              duration={duration}
              id={id}
              key={id}
              price={price}
              title={title}
              publishedAt={timeBefore}
            />
          )
        )}
      </div>
    );
  }

  return (
    <div
      key={Math.random() * 10}
      className="relative bg-white shadow-md rounded-lg p-3  w-full min-w-[180px] max-w-[550px] mx-auto grow flex flex-col gap-2"
    >
      <Card
        autherName={courses?.autherName}
        description={courses?.description}
        duration={courses?.duration}
        id={courses?.id}
        key={courses?.id}
        price={courses?.price}
        title={courses?.title}
        publishedAt={timeBefore}
      />

      {isCompleted === false && (
        <button
          onClick={() => handleMarkComplete()}
          className=" w-full  px-4 py-3 rounded-lg bg-blue-900 text-white hover:bg-blue-600"
        >
          {success.length > 0 ? success : "Mark As Completed"}
        </button>
      )}
    </div>
  );
};
