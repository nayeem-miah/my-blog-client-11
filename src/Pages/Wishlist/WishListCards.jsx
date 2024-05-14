import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const WishListCards = ({ item, handleDelete }) => {
  // const [users, setUsers] = useState([]);
  const { shortDescription, name, image, _id, category } = item;

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
        <Button onClick={() => handleDelete(_id)}>
          <MdDeleteForever className="text-4xl text-red-500"></MdDeleteForever>
        </Button>
      </CardActions>
    </Card>
  );
};

export default WishListCards;
