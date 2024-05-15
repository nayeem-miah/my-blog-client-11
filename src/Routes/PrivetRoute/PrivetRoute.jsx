/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Components/use/useAuth";
import Loading from "./Loading";
// import Loading from "./Loading";

const PrivetRouts = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>
    // return <span className="text-center text-4xl">loading...</span>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivetRouts;
