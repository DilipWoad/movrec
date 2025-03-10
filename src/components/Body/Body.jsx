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
      element: (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/movie",
          element: <MovieInfo />,
        },
        {
          path: "/person/:personId",
          element: <ActorInformation />,
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
