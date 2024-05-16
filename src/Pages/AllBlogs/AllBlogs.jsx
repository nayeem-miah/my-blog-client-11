import Cards from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const AllBlogs = () => {
//   const datas = useLoaderData();
  const [datas, setDatas] = useState([])
  // console.log(datas);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `https://b9a11-server-side-nayeem-miah.vercel.app/blogs?&search=${search}`)
        setDatas(data)
    };
    // console.log(data);
    getData();
  }, [search]);
  const handleSearch = e => {
    e.preventDefault();
    const field = e.target.search.value;
    setSearch(field);
  };
//   console.log(search);
  return (
    <div className="min-h-[calc(100vh-256px)] lg:mx-10 mx-1 ">
      <h2 className="text-center text-4xl my-6 mb-15 text-blue-600 font-bold">All Blogs </h2>
      <form onSubmit={handleSearch} className="mx-auto text-center mb-12">
        <input
          type="search"
          name="search"
          placeholder="search here"
          required
          className="input input-bordered input-accent w-full lg:max-w-xl max-w-48 md:max-w-xl"
        />
        <input className="btn btn-success" type="submit" value="search" />
      </form>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 my-8">
        {datas.map(data => (
          <Cards key={data._id} data={data}></Cards>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
