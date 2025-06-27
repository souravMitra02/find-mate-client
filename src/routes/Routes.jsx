import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddPost from "../Pages/AddPost";
import BrowseListings from "../Pages/BrowseListings";
import MyListings from "../Pages/MyListings";
import UpdatePost from "../Pages/UpdatePost";
import PostDetails from "../Pages/PostDetails";
import PrivateRoute from "../PrivateRoute";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <SignUp /> },
      {
        path: "/add-post",
        element: (
          <PrivateRoute>
            <AddPost />
          </PrivateRoute>
        ),
      },
      { path: "browse-listings", element: <BrowseListings /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <PostDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
