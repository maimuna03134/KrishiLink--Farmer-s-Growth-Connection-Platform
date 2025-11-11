import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AllCrops from "../pages/allCrops/AllCrops";
import AddCrop from "../pages/addCrop/AddCrop";
import MyPosts from "../pages/myPosts/MyPosts";
import MyInterests from "../pages/myInterests/MyInterests";
import Profile from "../pages/profile/Profile";
import AuthLayout from "../layouts/AuthLayout";
import CropDetails from "../pages/cropDetails/CropDetails";
import PrivateRouter from "./PrivateRouter";
import CropInformation from "../pages/cropDetails/CropInformation";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <p>Error</p>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/latest-crops"),
      },
      {
        path: "/all-crops",
        element: <AllCrops />,
        loader: () => fetch("http://localhost:3000/crops"),
      },
      {
        path: "/crop-details/:id",
        element: (
          <PrivateRouter>
            <CropDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/crops/${params.id}`),
      },
      // {
      //   path: "/crop-details/:id",
      //   element: (
      //     <PrivateRouter>
      //       <CropInformation />
      //     </PrivateRouter>
      //   ),
      //   loader: ({ params }) => fetch(`http://localhost:3000/crops/${params.id}`),
      // },
      {
        path: "/add-crop",
        element: (
          <PrivateRouter>
            <AddCrop />
          </PrivateRouter>
        ),
      },

      {
        path: "/my-posts",
        element: (
          <PrivateRouter>
            <MyPosts />
          </PrivateRouter>
        ),
      },
      {
        path: "/my-interests",
        element: (
          <PrivateRouter>
            <MyInterests />
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
