import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

function ExerciseCard({ exercise, exerciseImg }) {
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
        image={exerciseImg}
        title={exercise.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {exercise.name}
        </Typography>
        <Typography variant="body2" color="#fff">
          {exercise.category.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ExerciseCard;
