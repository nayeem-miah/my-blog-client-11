import { useLoaderData } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const FeaturedBlogs = () => {
  const users = useLoaderData();
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="min-h-[calc(100vh-256px)] lg:mx-10 mx-1 border my-5 lg:p-3">
      <table className="w-full  mx-1" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <thead>
          <tr className="p-4 shadow-lg">
            <th>no</th>
            <th>name</th>
            <th>image</th>
            <th>email </th>
            <th>Title</th>
          </tr>
        </thead>

        {users?.map((data, i) => (
          <tbody key={data._id}>
            <tr>
              <td>{(i = i + 1)}</td>
              <td>{data?.displayName}</td>
              <td>
                {(
                  <img src={data?.photo} className="rounded-full h-10 w-10" />
                ) || (
                  <img
                    src="https://i.ibb.co/zZKYVpC/istockphoto-1341046662-612x612.jpg"
                    className="rounded-full h-10 w-10"
                  />
                )}
              </td>
              <td>{data.email}</td>
              <td>{data.name}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default FeaturedBlogs;
