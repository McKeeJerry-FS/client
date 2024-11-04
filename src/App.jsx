import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

]);

const Jobify = () => {
  return <RouterProvider router={router} />;
}

export default Jobify