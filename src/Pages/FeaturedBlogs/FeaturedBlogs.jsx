import { useEffect, useState } from "react";
import useAuth from "../../Components/use/useAuth";
import Swal from "sweetalert2";

const FeaturedBlogs = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  //  console.log(user?.displayName);
  const handleDelete = id => {
    // are you sure
    fetch(` http://localhost:5000/featuredBlogs/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "this form is deleted",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then(result => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
          const remaining = users.filter(info => info._id !== id);
          setUsers(remaining);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/featuredBlogs/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setUsers(data);
      });
  }, [user]);
//   console.log(users);

  return (
    <div className="min-h-[calc(100vh-256px)]">
      <h4>FeaturedBlogs: {users.length}</h4>
      {users.map(data => (
        <table key={data._id}>
          <th>name</th>
          <th>email</th>
          <th>Title </th>
          <tr>{user?.displayName}</tr>
          <tr>{data.email}</tr>
          <tr>{data.name}</tr>
          <tr
            onClick={() => {
              handleDelete(data._id);
            }}
            className="btn"
          >
            X
          </tr>
        </table>
      ))}
    </div>
  );
};

export default FeaturedBlogs;
