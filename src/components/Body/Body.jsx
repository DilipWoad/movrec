import Browse from "./Browse.jsx";
import Login from "../Header/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import PrivateRoute from "../MovieUtilsComponents/PrivateRoute.jsx";
import MovieInfo from "../MovieInfoComponents/MovieInfo.jsx";
import ActorInformation from "../ActorInformationComponents/ActorInformation.jsx";
import Layout from "../Layout.jsx";

const Body = () => {
  const bodyRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/browse",
          element: (
            <PrivateRoute>
              <Browse />
            </PrivateRoute>
          ),
        },
        {
          path: "/movie",
          element: (
            <PrivateRoute>
              <MovieInfo />
            </PrivateRoute>
          ),
        },
        {
          path: "/person/:personId",
          element: (
            <PrivateRoute>
              <ActorInformation />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={bodyRoutes}></RouterProvider>
    </div>
  );
};

export default Body;
