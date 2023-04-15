import { Box, Container, Grid, Paper } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import React, { useEffect, useState } from "react";

function ExercisesHomeContainer() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const apiKey = "f9212116f48b5e1197dcdd12626ef75f93f3381e";
    const url = "https://wger.de/api/v2/exerciseinfo/?limit=300";
    fetch(url, {
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setExercises(
          data.results.filter(function (exercise) {
            if (exercise.images.length > 0 && exercise.language.id === 2)
              return true;
            else return false;
          })
        )
      )
      .catch((error) => console.error(error));
  }, []);
  console.log(exercises[0]);
  return (
    <Container maxWidth="lg">
      <Grid container>
        {exercises.map((exercise, index) => (
          <Grid item xs={4}>
            <ExerciseCard
              exerciseImg={`${exercise.images[0].image}`}
              exercise={exercise}
              key={index}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ExercisesHomeContainer;
