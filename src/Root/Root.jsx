import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            {/* navbar */}
        <div className="min-h-[calc(100vh-600px)] shadow-lg bg-base-300">
        <Navbar></Navbar>
        </div>
            <Outlet></Outlet>
            {/*  footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;