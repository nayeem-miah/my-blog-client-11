import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
import useAuth from "../../Components/use/useAuth";
import WishListCards from "./WishListCards";

const Wishlist = () => {
    // const daata = useLoaderData();
    // console.log(users);
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    console.log(users);
//  console.log(users);
//     // const handleDelete = id => {
//     //   // are you sure
//     //   fetch(` http://localhost:5000/featuredBlogs/${id}`, {
//     //     method: "DELETE",
//     //   })
//     //     .then(res => res.json())
//     //     .then(data => {
//     //       if (data.deletedCount > 0) {
//     //         Swal.fire({
//     //           title: "Are you sure?",
//     //           text: "this form is deleted",
//     //           icon: "warning",
//     //           showCancelButton: true,
//     //           confirmButtonColor: "#3085d6",
//     //           cancelButtonColor: "#d33",
//     //           confirmButtonText: "Yes, delete it!",
//     //         }).then(result => {
//     //           if (result.isConfirmed) {
//     //             Swal.fire({
//     //               title: "Deleted!",
//     //               text: "Your file has been deleted.",
//     //               icon: "success",
//     //             });
//     //           }
//     //         });
//     //         const remaining = users.filter(info => info._id !== id);
//     //         setUsers(remaining);
//     //       }
//     //     });
//     // };
    
  useEffect(() => {
    fetch(`http://localhost:5000/wishlists/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      });
  }, [user]);
    return (
        <div className="lg:mx-10 mx-1">
            <h3 className="text-4xl text-center my-5">Wishlist</h3>
           
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 my-4">
            {
                users.map(item=> <WishListCards key={item._id} item={item}></WishListCards>)
            }
            </div>
        </div>
    );
};

export default Wishlist;