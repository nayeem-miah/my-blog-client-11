import { useEffect, useState } from "react";

import useAuth from "../../Components/use/useAuth";
import WishListCards from "./WishListCards";
import Swal from "sweetalert2";

const Wishlist = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  // const wishlistUrl = `http://localhost:5000/wishlists/${user?.email}`
  // const wishlistRecentUrl = `http://localhost:5000/wishlistRecent/${user?.email}`
  useEffect(() => {
    fetch(`http://localhost:5000/wishlists/${user?.email}`, {credentials:"include"})
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setUsers(data);
      });
  }, [user]);

  const handleDelete = id => {
    //   // are you sure
    fetch(`http://localhost:5000/wishlist/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        //   console.log(data, id);
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

  return (
    <div className="lg:mx-10 mx-1 min-h-[calc(100vh-256px)]">
      <h3 className="text-4xl text-center my-5">Wishlist</h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 my-4">
        {users.map(item => (
          <WishListCards
            key={item._id}
            item={item}
            handleDelete={handleDelete}
          ></WishListCards>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
