import toast from "react-hot-toast";
import useAuth from "../use/useAuth";
import ShowComment from "./ShowComment";
// import { Navigate } from "react-router-dom";
const Comment = ({ email }) => {
  const { user } = useAuth();

  const handleComment = e => {
    e.preventDefault();
    const form = e.target;
    const email = user.email;
    const photo = user?.photoURL;
    // console.log(photo);
    const displayName = user?.displayName;
    const comment = form.comment.value;
    const userComment = { email, comment, photo, displayName };
    console.log(userComment);
    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userComment),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.insertedId) {
          toast.success("successfully comment");
        }
        form.reset();
        // <Navigate to={'/details'}></Navigate>
      });
  };
  console.log(email);
  return (
    <div>
      <h2 className="text-center text-4xl">Client Chronicles</h2>
      <div>
        {/* {email === user?.email && ( */}
        {email !== user.email && (
          <form onSubmit={handleComment}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="enter email"
              name="email"
              defaultValue={user?.email}
              required
              className="input input-bordered input-secondary w-full my-5 text-white"
            />
            <br />
            <label htmlFor="">
              Your Comments :
              <br />
            </label>
            <textarea
              name="comment"
              // typeof="textarea"
              className="textarea textarea-secondary w-full text-white"
              placeholder="Your Comment"
              required
            ></textarea>
            <br />
            <input
              className="btn-primary btn w-full my-4"
              type="submit"
              value="submit"
            />
          </form>
        )}
      </div>
      {/* show comment */}
      <h2 className="text-center text-3xl my-4">Client Comment </h2>
      <ShowComment></ShowComment>
    </div>
  );
};

export default Comment;
