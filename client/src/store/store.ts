import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

interface Course {
  id: number;
  title: string;
  completed: boolean;
}

interface Student {
  id: number;
  name: string;
  coursesEnrolledIn: Course[];
  completedCourses: Course[];
}

interface RootState {
  student: Student;
}

const initialState: Student = {
  id: 0,
  name: "",
  coursesEnrolledIn: [],
  completedCourses: [],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudentData: (state, action: PayloadAction<Student>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setCourseEnrolledIn: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const newCourse = {
        id: action.payload.id,
        title: action.payload.title,
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
        state.coursesEnrolledIn.splice(courseIndex, 1);
      }
    },
  },
});

export const { setStudentData, setCourseEnrolledIn, setCompletedCourse } =
  studentSlice.actions;

export const store = configureStore({
  reducer: {
    student: studentSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
