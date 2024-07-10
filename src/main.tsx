import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Calendar from "./components/calendar";
import WeekCalendar from "./components/WeekCalendar";
const router = createBrowserRouter([
  {
    path: "/",
    element: < Calendar />,
  },
  {
    path: "/week", 
    element: <WeekCalendar />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
