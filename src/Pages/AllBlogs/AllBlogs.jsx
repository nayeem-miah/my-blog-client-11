import { useLoaderData } from "react-router-dom";

const AllBlogs = () => {
    const datas = useLoaderData();
    console.log(datas);
    return (
        <div className="min-h-[calc(100vh-256px)]">
           {/* {
            datas.map(data=>)
           } */}
        </div>
    );
};

export default AllBlogs;