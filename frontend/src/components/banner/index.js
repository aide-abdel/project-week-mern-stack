import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function MyCarousel() {
  var items = [
    {
      name: "Choose Excercises",
      description:
        "Fitness is not about being better than someone else. It's about being better than you used to be.",
    },
    {
      name: "Plan meals",
      description:
        "You don't have to be great to start, but you have to start to be great.",
    },
    {
      name: "Plan workouts",
      description: "The only way to do great work is to love what you do",
    },
    {
      name: "Plan workouts",
      description:
        "Fitness is not just about the body. It's also about the mind.",
    },
    {
      name: "Plan workouts",
      description:
        "Exercise is a celebration of what your body can do. Not a punishment for what you ate",
    },
  ];

  return (
    <Carousel animation="slide" sx={{ marginBottom: "10" }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      sx={{
        height: 300,
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* <h2>{props.item.name}</h2> */}
      <h1 style={{ padding: "8%" }}>{props.item.description}</h1>
    </Paper>
  );
}
function Banner() {
  return <MyCarousel />;
}

export default Banner;
