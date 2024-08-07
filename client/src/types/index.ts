// enum EnrollmentStatus {
//   Open = "open",
//   Closed = "closed",
//   InProgress = "in Progress",
// }

export type Course = {
  id: number;
  title: string;
  description: string;
  price: number;
  autherName: string;
  duration: number;
  publishedAt: string;
  enrollmentStatus: string;
  schedule: string;
  location: string;
  prerequisites: string;
};

export interface CourseState {
  courses: Course;
  completed?: boolean;
  id?: number;
}

export interface StudentState {
  // id: number;
  name: string;
  coursesEnrolledIn: CourseState[];
  completedCourses: CourseState[];
}
