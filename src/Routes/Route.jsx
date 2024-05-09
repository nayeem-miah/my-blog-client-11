import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBlogs",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featuredBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);
export default router;
