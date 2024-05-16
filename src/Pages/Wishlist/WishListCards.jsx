import {

  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const WishListCards = ({ item, handleDelete }) => {
  // const [users, setUsers] = useState([]);
  const { shortDescription, name, image, _id, category } = item;
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <Card className="h-full" data-aos="fade-down-right">
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
        <Link to={`/wishlistDetils/${_id}`}>
          <button>details</button>
        </Link>
        <p onClick={() => handleDelete(_id)}>
          <MdDeleteForever className="text-4xl ml-10 text-red-500"></MdDeleteForever>
        </p>
      </CardActions>
    </Card>
  );
};

export default WishListCards;
