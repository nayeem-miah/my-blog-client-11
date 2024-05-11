import { useLoaderData } from "react-router-dom";
import Hero from "../../Components/Header/Hero";
import RecentBlogs from "../../Components/Navbar/RecentBlogs/RecentBlogs";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Optional from "../../Components/Optional/Optional";

const Home = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className=" lg:mx-10 my-10 ">
      <Hero></Hero>
      {/* recent blogs */}
      <h2 className="text-center text-4xl my-10">Recent Blogs </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {blogs.map(blog => (
          <RecentBlogs key={blog._id} blog={blog}></RecentBlogs>
        ))}
      </div>
      <Optional></Optional>
      {/* newsletter section */}
      <div className="lg:my-10 my-5">
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
