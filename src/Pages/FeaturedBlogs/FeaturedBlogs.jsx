import { useLoaderData } from "react-router-dom";

const FeaturedBlogs = () => {
  const users = useLoaderData();
      
  // console.log(users?.photo);

  // ----------------------------------

  // const [users, setUsers] = useState([]);
  //  console.log(user?.displayName);
  // const handleDelete = id => {
  //   // are you sure
  //   fetch(` http://localhost:5000/featuredBlogs/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.deletedCount > 0) {
  //         Swal.fire({
  //           title: "Are you sure?",
  //           text: "this form is deleted",
  //           icon: "warning",
  //           showCancelButton: true,
  //           confirmButtonColor: "#3085d6",
  //           cancelButtonColor: "#d33",
  //           confirmButtonText: "Yes, delete it!",
  //         }).then(result => {
  //           if (result.isConfirmed) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success",
  //             });
  //           }
  //         });
  //         const remaining = users.filter(info => info._id !== id);
  //         setUsers(remaining);
  //       }
  //     });
  // };
  return (
    <div className="min-h-[calc(100vh-256px)] lg:mx-10 mx-1 border my-5">
      <table className="w-full border mx-1">
        <thead>
          <tr className="border">
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
                {<img src={data?.photo} className="rounded-full h-10 w-10" /> || (
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
