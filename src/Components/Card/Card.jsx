import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  const { shortDescription, name, _id, image, category } = data;
  console.log(data.email);
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
        <Link to={"/wishlist"}>
          <Button size="small">wishlist</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default Cards;
