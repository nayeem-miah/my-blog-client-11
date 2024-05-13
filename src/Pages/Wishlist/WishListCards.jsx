import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const WishListCards = ({item}) => {

 
    // const wishlistEmail = user.email;
    const { shortDescription, name, image, _id,category } = item;
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
            <Button size="small">X</Button>
      
          
        </CardActions>
      </Card>
    );
};

export default WishListCards;