import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../slice/StudentSlice";
import courseSlice from "../slice/CourseSlice";
// import { CourseState, StudentState } from "../types";

/* eslint-disable @typescript-eslint/no-unused-vars */
// interface RootState {
//   student: StudentState;
//   course: CourseState[];
// }

export const store = configureStore({
  reducer: {
    student: studentSlice,
    course: courseSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
