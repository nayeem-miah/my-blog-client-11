import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const RecentDetails = () => {
  const recentDetails = useLoaderData();
  const { title, image, description, category } =
    recentDetails;
//   console.log(recentDetails);
  return (
    <Card className="min-h-[calc(100vh-256px)] lg:mx-10 my-5">
      <CardMedia sx={{ height: 400 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <span className="font-bold">category:</span>
          {category}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <span className="font-bold">description:</span> {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecentDetails;
