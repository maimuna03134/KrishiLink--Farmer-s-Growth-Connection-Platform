import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AllCrops from "../pages/allCrops/AllCrops";
import AddCrop from "../pages/addCrop/AddCrop";
import MyPosts from "../pages/myPosts/MyPosts";
import MyInterests from "../pages/myInterests/MyInterests";
import AuthLayout from "../layouts/AuthLayout";
import CropDetails from "../pages/cropDetails/CropDetails";
import PrivateRouter from "./PrivateRouter";
import MyProfile from "../pages/profile/MyProfile";
import Loading from "../pages/Loading";
import InterestForm from "../pages/cropDetails/InterestForm";
import DashboardLayout from "../layouts/DashboardLayout";
import ContactUs from "../pages/Others/ContactUs";
import AboutUs from "../pages/Others/AboutUs";
import FAQPage from "../pages/Others/FAQPage";
import DefaultDashboardRedirect from "../layouts/DefaultDashboardRedirect";
import Error from "../pages/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://krisilink-farmer-growth-connection.vercel.app/latest-crops"
          ),
      },
      {
        path: "/all-crops",
        element: <AllCrops />,

      },
      {
        path: "/crop-details/:id",
        element: <CropDetails />,
        loader: ({ params }) =>
          fetch(
            `https://krisilink-farmer-growth-connection.vercel.app/crops/${params.id}`
          ),
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/faq',
        element: <FAQPage />
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
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <DefaultDashboardRedirect />,
      },
      {
        path: "/dashboard/interest-form",
        element:
          < InterestForm />

      },
      {
        path: "/dashboard/add-crop",
        element: <AddCrop />
      },
      {
        path: "/dashboard/my-posts",
        element: <MyPosts />
      },
      {
        path: "/dashboard/my-interests",
        element: <MyInterests />
      },
      // {
      //   path: "/dashboard/received-interests/:cropId",
      //   element: <ReceivedInterests />
      // },
      {
        path: "/dashboard/profile",
        element: <MyProfile />
      },
    ]
  },
]);
