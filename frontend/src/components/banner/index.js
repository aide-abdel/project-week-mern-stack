import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function MyCarousel() {
  var items = [
    {
      name: "Choose Excercises",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Plan meals",
      description: "Hello World!",
    },
    {
      name: "Plan workouts",
      description: "Hello World!",
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
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}
function Banner() {
  return <MyCarousel />;
}

export default Banner;
