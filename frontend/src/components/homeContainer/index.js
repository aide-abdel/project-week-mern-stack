import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import React from "react";

function HomeContainer() {
  return (
    <Container maxWidth="xxl">
      <Grid container>
        <Grid item xs={6}>
          <Card sx={{ height: 600 }}>
            <CardContent>
              <Typography variant="h3" color="gray">
                Choose your Excercises
              </Typography>
              <Typography variant="body1">
                Experience a diverse range of high-intensity, results-driven
                classes designed for all fitness levels. From heart-pumping HIIT
                and exhilarating cycling to strength-building sculpt and
                restorative yoga, we have something for everyone. Our certified
                instructors are committed to delivering challenging yet
                accessible workouts, ensuring you stay motivated and see
                progress every step of the way.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia
              sx={{ height: 600, width: 1000 }}
              component="img"
              image="https://cdn.shopify.com/s/files/1/0580/2865/4785/files/ro-t8-handles-banner_1920x820_crop_right.jpg?v=1626980099"
            />
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardMedia
              sx={{ height: 600, width: 1000 }}
              component="img"
              image="https://static01.nyt.com/images/2017/04/09/well/9minute-workout-promo/9minute-workout-promo-jumbo.png"
            />
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card sx={{ height: 600 }}>
            <CardContent>
              <Typography variant="h3" color="gray">
                Plan your workouts
              </Typography>
              <Typography variant="body1">
                Experience a diverse range of high-intensity, results-driven
                classes designed for all fitness levels. From heart-pumping HIIT
                and exhilarating cycling to strength-building sculpt and
                restorative yoga, we have something for everyone. Our certified
                instructors are committed to delivering challenging yet
                accessible workouts, ensuring you stay motivated and see
                progress every step of the way.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card sx={{ height: 600 }}>
            <CardContent sx={{ width: 350, justifyItems: "center" }}>
              <Typography variant="h3" color="gray">
                Plan your meals
              </Typography>
              <Typography variant="body1">
                Experience a diverse range of high-intensity, results-driven
                classes designed for all fitness levels. From heart-pumping HIIT
                and exhilarating cycling to strength-building sculpt and
                restorative yoga, we have something for everyone. Our certified
                instructors are committed to delivering challenging yet
                accessible workouts, ensuring you stay motivated and see
                progress every step of the way.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardMedia
              sx={{ height: 600, width: 1000 }}
              component="img"
              image="https://supersafeway.com/wp-content/uploads/2019/12/Meal_planning_101.png"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeContainer;
