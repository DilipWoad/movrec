import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router";
import PrivateRoute from "./PrivateRoute.jsx";

const Body = () => {
  const bodyRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <PrivateRoute>
          <Browse />
        </PrivateRoute>
      ),
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={bodyRoutes}></RouterProvider>
    </div>
  );
};

export default Body;
