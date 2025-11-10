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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-crops",
        element: <AllCrops />,
      },
      {
        path: "/add-crop",
        element: <AddCrop />,
      },

      {
        path: "/my-posts",
        element: <MyPosts />,
      },
      {
        path: "/my-interests",
        element: <MyInterests />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
