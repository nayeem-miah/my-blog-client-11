import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Card/Card";

const AllBlogs = () => {
    const datas = useLoaderData();
    // console.log(datas);
    return (
        <div className="min-h-[calc(100vh-256px)]">
            <h2 className="text-center text-4xl my-6">All Blogs </h2>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
           {
            datas.map(data=><Cards key={data._id} data={data}></Cards>)
           }
           </div>
        </div>
    );
};

export default AllBlogs;