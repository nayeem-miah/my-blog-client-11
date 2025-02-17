import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../use/useAuth";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const { logout, user } = useAuth();
  const [open, setOpen] = useState();
  const handleLogout = () => {
    logout()
      // eslint-disable-next-line no-unused-vars
      .then(result => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "logOut successful",
          showConfirmButton: false,
          timer: 2000,
        });
        // console.log(result.user);
      })
      .catch(error => {
        console.error(error);
        setOpen(false);
      });
  };

  const nabLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allBlogs">All Blogs </NavLink>
      </li>
      <li>
        <NavLink to="/featuredBlogs">featured Blogs </NavLink>
      </li>
      <span>
        {user && (
          <li>
            <NavLink to="/addBlogs">Add Blog</NavLink>
          </li>
        )}
      </span>
      <span>
        {user && (
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
        )}
      </span>
    </>
  );
  return (
    <div className="navbar bg-base-300 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-300 absolute z-50 font-bold rounded-box w-52"
          >
            {nabLinks}
          </ul>
        </div>
        <a className="text-xs lg:text-2xl text-green-600">
          {" "}
          <Typewriter
            words={["TechTrek Blogs"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold px-1">{nabLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="relative md:border-l flex items-center  justify-end w-full md:w-auto pl-3 ">
          <div className=" w-[50px]"></div>
          {!user && (
            <button className="border-2 p-1 text-white bg-[#FF497C] rounded border-[#FF497C] mr-5">
              {" "}
              <NavLink to="/register">Register</NavLink>
            </button>
          )}
          {user ? (
            <p
              onClick={() => setOpen(!open)}
              className="border-2 border-[#FF497C] rounded-full w-[40px]"
            >
              <img
                src={user?.photoURL}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </p>
          ) : (
            <Link
              to={"/login"}
              className="bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-0.5 rounded"
            >
              Login
            </Link>
          )}

          <div
            className={`absolute text-center ${
              open ? "block" : "hidden"
            } flex flex-col justify-center items-center gap-4  shadow-lg bg-white dark:bg-[#120505] px-8 py-4 top-16 dark:text-white z-50`}
          >
            <p className="text-lg font-semibold">{user?.displayName}</p>
            <p className="text-lg font-semibold">{user?.email}</p>

            <button
              onClick={() => handleLogout()}
              className="bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
