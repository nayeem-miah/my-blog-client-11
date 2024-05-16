
import { useLoaderData } from "react-router-dom";

const WishListCardsDetails = () => {
  const item = useLoaderData();
// console.log(item);
  return (
    <div className="lg:mx-10 my-10">
      <div>
        <h2 className="text-green-500 text-center text-4xl my-7">details Name : {item.name}</h2>
        <img className="w-full rounded shadow-2xl" src={item.image} alt="" />
      </div>
      <div>
        <h3 className="text-2xl my-4">category :{item.category} </h3>
        <p className="text-xl">shortDescription : {item.shortDescription}</p>
      </div>
    </div>
  );
};

export default WishListCardsDetails;
