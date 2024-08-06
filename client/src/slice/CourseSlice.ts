import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../types";

const initialState = {
  values:
    localStorage.getItem("courses") !== undefined
      ? JSON.parse(localStorage.getItem("courses") || "[]")
      : [],
};

// const initialState: CourseState = {
//   courses: [],
// };

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      console.log(action.payload);
      state.values = action.payload;
    },
  },
});

export const { setCourses } = courseSlice.actions;

export default courseSlice.reducer;
