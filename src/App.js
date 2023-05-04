
import "./App.css";
import Head from "./Components/Head";
import Body from "./Components/Body";
import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import InfoPage from "./Components/InfoPage";
import BookingPage from "./Components/BookingPage";

function App() {
  return (
    <>
      <Head />
      <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/info/:id",
        element: <InfoPage />,
      },
      {
        path: "/bookings/:id",
        element: <BookingPage />,
      },
    ],
  },
]);

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
