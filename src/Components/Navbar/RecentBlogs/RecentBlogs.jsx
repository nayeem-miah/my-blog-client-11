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
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RecentBlogs = ({ blog }) => {
  const user = useAuth();
  const { category, description, image, _id, title } = blog;

  const photo = user?.photoURL;
  useEffect(() => {
    Aos.init();
  }, []);
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
    fetch("https://b9a11-server-side-nayeem-miah.vercel.app/wishlistRecent", {
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
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
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
