import { useEffect, useState } from "react";

const ShowComment = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/comment")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setShow(data);
      });
  });

  console.log(show);
  return (
    <div>
      {show.map(item => (
        <div
          key={item._id}
          className=" mx-auto w-2/3 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 my-6"
        >
          <div className="mt-2">
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <img
                  className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  src={item.photo}
                />
                <p
                  className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  {item.displayName}
                </p>
              </div>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {item.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowComment;
