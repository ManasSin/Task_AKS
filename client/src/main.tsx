import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";
import { Courses } from "./components/Courses";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { CoursePage } from "./components/CoursePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CoursePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
