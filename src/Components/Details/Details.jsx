import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { shortDescription, name, image, description, category } = details;
//   console.log(details);
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
          <span className="font-bold">shortDescription:</span>{" "}
          {shortDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="font-bold">description:</span> {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
