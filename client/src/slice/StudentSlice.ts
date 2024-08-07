import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseState, StudentState } from "../types";

const initialState: StudentState = {
  // id: 0,
  name: "",
  coursesEnrolledIn: [],
  completedCourses: [],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudentName: (state, action: PayloadAction<{ name: string }>) => {
      if (state.name !== action.payload.name && action.payload.name.length > 0)
        state.name = action.payload.name;
    },
    setCourseEnrolledIn: (state, action: PayloadAction<CourseState>) => {
      const newCourse: CourseState = {
        courses: action.payload.courses,
        id: action.payload.id,
        completed: false,
      };
      state.coursesEnrolledIn.push(newCourse);
    },
    setCompletedCourse: (state, action: PayloadAction<{ id: number }>) => {
      const courseIndex = state.coursesEnrolledIn.findIndex(
        (course) => course.id === action.payload.id
      );
      if (courseIndex !== -1) {
        state.coursesEnrolledIn[courseIndex].completed = true;
        state.completedCourses.push(state.coursesEnrolledIn[courseIndex]);
        // state.coursesEnrolledIn.splice(courseIndex, 1);
      }
    },
  },
});

export const { setStudentName, setCourseEnrolledIn, setCompletedCourse } =
  studentSlice.actions;

export default studentSlice.reducer;
