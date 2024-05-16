import toast from "react-hot-toast";
import { Navigate, useLoaderData } from "react-router-dom";
import useAuth from "../use/useAuth";

const UpdateCard = () => {
  const { user } = useAuth();
  const email = user?.email;
  const items = useLoaderData();
//   console.log(items);
  const { name,
    image,
    category,
    shortDescription,
    description} =items;
  const _id = items._id;
  const handleUpdated = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const description = form.description.value;
    const updatedData = {
      name,
      image,
      category,
      shortDescription,
      description,
      email,
    };
    // console.log(updatedData);
    fetch(`https://b9a11-server-side-nayeem-miah.vercel.app/blog/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.modifiedCount > 0) {
            toast.success("Your data updated success");
        }
        form.reset();
        <Navigate to={"/allBlogs"}></Navigate>;
      });
  };

  return (
    <div>
      <h2 className="text-center text-4xl my-4">Update Blogs : {name} </h2>
      <form onSubmit={handleUpdated} className="my-5">
        <div className="w-1/2  mx-auto my-2">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            required
            placeholder="Title Name"
            className="flex flex-1 p-1  rounded w-full  dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
        <div className="w-1/2  mx-auto my-2">
          <label className="block text-sm font-medium">image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            required
            placeholder="image URL"
            className="flex flex-1 p-1  rounded w-full  dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
        <div className="w-1/2  mx-auto my-2">
          <label className="block text-sm font-medium" htmlFor="category">
            category
          </label>
          <select
            type="text"
            className="flex flex-1 p-1  rounded w-full  dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
            placeholder="select category"
            name="category"
            defaultValue={category}
            required
          >
            <option value="Personal Development & Self-Help" selected>
              Personal Development & Self-Help
            </option>
            <option value="MalaysFood & Cookingia" selected>
              Food & Cooking
            </option>
            <option value="Nature & Environment" selected>
              Nature & Environment
            </option>
            <option value="Science & Technology" selected>
              Science & Technology
            </option>
            <option value="Travel & Adventure" selected>
              Travel & Adventure
            </option>
          </select>
        </div>
        <div className="w-1/2  mx-auto my-2">
          <label className="block text-sm font-medium">short description</label>
          <input
            type="text"
            name="shortDescription"
            required
            defaultValue={shortDescription}
            placeholder="short description"
            className="flex flex-1 p-1  rounded w-full  dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
        <div className="w-1/2  mx-auto my-2">
          <label className="block text-sm font-medium">Long description</label>
          <input
            type="text"
            name="description"
            defaultValue={description}
            required
            placeholder="long description"
            className="flex flex-1 p-1  rounded w-full  dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
          <input
            className="btn w-full my-3 btn-secondary"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCard;
