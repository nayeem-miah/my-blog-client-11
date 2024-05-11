import {
  
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../use/useAuth";

const Details = () => {
  const { user } = useAuth();
//   console.log(user.email);
  const details = useLoaderData();
  const { shortDescription, name, image, description, email, _id, category } =
    details;
   
//   console.log(details.email);
  return (
    <Card className="min-h-[calc(100vh-256px)] lg:mx-10 md:mx-4 my-5">
      <CardMedia sx={{ height: 400 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <span className="font-bold">category:</span>
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="font-bold">shortDescription:</span>
          {shortDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="font-bold">description:</span> {description}
        </Typography>
      </CardContent>
      <div>
        {email === user.email && (
          <Link className="w-full mx-auto my-4 h-full" to={`/updateBlogs/${_id}`}>
            <p  size="small " className="btn btn-secondary text-center  mx-auto w-1/3  my-4 ">update</p>
          </Link>
        )}
      </div>
    </Card>
  );
};

export default Details;
