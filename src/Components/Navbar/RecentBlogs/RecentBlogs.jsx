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

const RecentBlogs = ({ blog }) => {
  const user = useAuth();
  const { category, description, image, _id, title } = blog;
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
          <Link to={user ? "/wishlist" : "/login"}>
            <Button size="small">wishlist</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default RecentBlogs;
