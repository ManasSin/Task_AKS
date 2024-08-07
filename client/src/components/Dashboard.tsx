import { useSelector } from "react-redux";
import { CourseState } from "../types";
import { CoursesCard } from "./CoursesCard";

// type Props = {};

export const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const courses = useSelector((state: any) => state.student.coursesEnrolledIn);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const completedCourse = useSelector(
    (state: any) => state.student.completedCourses
  );
  // const courses  = data;
  console.log(courses);
  return (
    <main className="mx-auto min-h-screen bg-gradient-to-r from-blue-600 to-blue-400">
      <section className="flex flex-col justify-start gap-6 items-center max-w-5xl mx-auto w-full">
        <h2 className="text-xl text-black font-semibold ">
          Courses that you have enrolled in
        </h2>
        <div className="grid grid-flow-row md:grid-flow-col max-w-7xl mx-6 gap-y-2 gap-x-2">
          {courses.length > 0 ? (
            courses.map(({ courses, id, completed }: CourseState) => (
              // course.courses.map((course: Course) => (
              <CoursesCard
                // key={course.id}
                courses={courses}
                isCompleted={completed}
                id={id}
              />
              // ))
            ))
          ) : (
            <p className="text-white text-center">No courses added yet</p>
          )}
        </div>
      </section>
      {completedCourse.length > 0 ? (
        <section className="flex flex-col justify-start gap-6 items-center max-w-5xl mx-auto w-full">
          <h2 className="text-xl text-black font-semibold ">
            Completed Courses
          </h2>
          <div className="grid grid-flow-row md:grid-flow-col max-w-7xl mx-6 gap-y-2 gap-x-2">
            {completedCourse.map(({ courses, id }: CourseState) => (
              // course.courses.map((course: Course) => (
              <CoursesCard
                // key={course.id}
                courses={courses}
                isCompleted={true}
                id={id}
              />
              // ))
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
};

// {courses.length > 0 ? (
//   courses.map((course: CourseState) => (
//     <CoursesCard
//       // key={course.id}
//       courses={course.courses}
//       isCompleted={true}
//       id={course.id}
//     />
//   ))
// ) : (
//   <p className="text-white text-center">No courses added yet</p>
// )}
