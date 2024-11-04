import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>About</h1>
      </div>
    ),
  },
  {
    path: "/HomeLayout",
    element: <HomeLayout />
  }

]);

const Jobify = () => {
  return <RouterProvider router={router} />;
}

export default Jobify