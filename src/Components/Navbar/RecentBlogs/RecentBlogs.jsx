import { Link } from "react-router-dom";
import useAuth from "../../use/useAuth";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast";

const RecentBlogs = ({ blog }) => {
  const user = useAuth();
  const { category, description, image, _id, title } = blog;

  const photo = user?.photoURL;

  const handleButton = () => {
    const newData = {
      description,
      title,
      _id,
      image,
      category,
      user,
      photo,
    };
    fetch("http://localhost:5000/wishlistRecent", {
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
    <div>
      <Card className="h-full">
        <CardMedia sx={{ height: 200 }} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/recentDetails/${_id}`}>
            <Button size="small">details</Button>
          </Link>

          <Button onClick={handleButton} size="small">
            wishlist
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default RecentBlogs;
