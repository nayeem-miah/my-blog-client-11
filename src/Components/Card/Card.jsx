import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import useAuth from "../use/useAuth";
import toast from "react-hot-toast";

const Cards = ({ data }) => {
  const { user } = useAuth();
  // const wishlistEmail = user.email;
  const { shortDescription, name, _id, image, category} = data;
  const photo = user?.photoURL;
  
  const handleButton = () => {
   

    const newData = {
      shortDescription,
      name,
      _id,
      image,
      category,
      user,
      photo,
    };
    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success("Your data added  successfully");
        }
      });
  };
  return (
    <Card className="h-full">
      <CardMedia sx={{ height: 200 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/details/${_id}`}>
          <Button size="small">details</Button>
        </Link>

        <Button onClick={handleButton} size="small">
          wishlist
        </Button>
      </CardActions>
    </Card>
  );
};
export default Cards;
