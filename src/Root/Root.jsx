import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            {/* navbar */}
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            {/*  footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;