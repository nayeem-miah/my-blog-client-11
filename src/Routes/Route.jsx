import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPages from "../Pages/ErrorPage";
import PrivetRouts from "./PrivetRoute/PrivetRoute";
import Details from "../Components/Details/Details";
import RecentDetails from "../Components/Navbar/RecentBlogs/recentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/recent')
      },
      {
        path: "/addBlogs",
        element: (
          <PrivetRouts>
            <AddBlog></AddBlog>
          </PrivetRouts>
        ),
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
        loader: ()=> fetch('http://localhost:5000/blogs')
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params})=> fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path: "/recentDetails/:id",
        element: <RecentDetails></RecentDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/recentDetails/${params.id}`)
      },
      {
        path: "/featuredBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/wishlist",
        element: (
          <PrivetRouts>
            <Wishlist></Wishlist>
          </PrivetRouts>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
