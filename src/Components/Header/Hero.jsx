import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import ing from "../../assets/digital-team-expedition_1029476-89963.jpg";
const Hero = () => {
  return (
    <section className="dark:bg-gray-300 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between min-h-screen">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold my-4 -mt-8 text-blue-500  ">
            WellCome
            <br />
            <h3 className="text-4xl text-violet-800 my-4">
              <Typewriter
                words={["TechTrek Blogs", " "]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h3>
          </h1>
          <p className="my-4">
            TechTrek Blogs is a vibrant online platform where tech enthusiasts industry professionals
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to={"/login"} className="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            Explore Now
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={ing}

            className="w-full h-full rounded"
          />
        </div>
      </div>
    </section>
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="lg:flex gap-4">
    //     <img src={ing} className="lg:w-1/2 w-full  h-full rounded-lg " />
    //     <div>
    //       <h1 className="text-5xl font-bold">Box Office News!</h1>
    //       <p className="py-6">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
