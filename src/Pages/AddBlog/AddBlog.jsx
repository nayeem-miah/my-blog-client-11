import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import useAuth from "../../Components/use/useAuth";

const AddBlog = () => {
    const {user} = useAuth();
    const email = user?.email;
    const photo = user?.photoURL;
    const displayName = user?.displayName;
  const handleAddBlog = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const description = form.description.value;
    const data = {
      name,
      image,
      category,
      shortDescription,
      description,
      email,
      photo,
      displayName

    };
    // console.log(data);
    fetch('http://localhost:5000/blogs', {
    method: 'POST', 
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            toast.success('Your data added  successfully')
        }
        form.reset();
        <Navigate to={'/'}></Navigate>
    })
  };
  return (
    <div>
      <h2>this is add Blogs page </h2>

      <form onSubmit={handleAddBlog} className="my-5">
        <div className="w-1/2  mx-auto my-2">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
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
            <option value="Wellness" selected>
            Wellness
            </option>
          </select>
        </div>
        <div className="w-1/2  mx-auto my-2">
          <label className="block text-sm font-medium">short description</label>
          <input
            type="text"
            name="shortDescription"
            required
            placeholder="short description"
            className="flex flex-1 p-1  rounded w-full  dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
        <div className="w-1/2  mx-auto my-2">
          <label className="block text-sm font-medium">Long description</label>
          <input
            type="text"
            name="description"
            required
            placeholder="long description"
            className="flex flex-1 p-1  rounded w-full  dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
          <input
            className="btn w-full my-3 btn-secondary"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
