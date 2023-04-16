import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

function MealCard({ ingredientName, ingredientImage }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 300,
        marginTop: "2em",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={ingredientImage}
        title={ingredientName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ingredientName}
        </Typography>
        <Typography variant="body2" color="#fff">
          {ingredientName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Meal Planner</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MealCard;
