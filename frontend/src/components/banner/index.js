import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Card, CardMedia, Typography } from "@mui/material";

function MyCarousel() {
  var items = [
    {
      image:
        "https://www.muscleandfitness.com/wp-content/uploads/2018/11/Group-Fitness-Class-Performing-A-Variety-Of-Exercises-1.jpg?quality=86&strip=all",
      description:
        "Fitness is not about being better than someone else. It's about being better than you used to be.",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0580/2865/4785/files/ro-t8-handles-banner_1920x820_crop_right.jpg?v=1626980099",
      description:
        "You don't have to be great to start, but you have to start to be great.",
    },
    {
      image:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/Female_Plank_1200x628-facebook.jpg?w=1155&h=1318",
      description: "The only way to do great work is to love what you do",
    },
    {
      image:
        "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
      description:
        "Fitness is not just about the body. It's also about the mind.",
    },
    {
      image:
        "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2021/07/Gym-Closures.960-715x358.jpg",
      description:
        "Exercise is a celebration of what your body can do. Not a punishment for what you ate",
    },
  ];

  return (
    <Carousel animation="slide" sx={{ marginBottom: "10", marginTop: "1%" }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Card
      sx={{
        position: "relative",
      }}
    >
      <CardMedia
        image={props.item.image}
        sx={{ height: "0", paddingTop: "20%" }}
      ></CardMedia>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.54)",
          color: "white",
          padding: "3%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">{props.item.description}</Typography>
      </Box>
    </Card>
  );
}
function Banner() {
  return <MyCarousel />;
}

export default Banner;
