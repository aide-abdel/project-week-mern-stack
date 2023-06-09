import React, { useState, useEffect } from "react";
import MealCard from "./MealCard";
import { Container, Grid } from "@mui/material";

function MealsContainer() {
  const apiKey = "f9212116f48b5e1197dcdd12626ef75f93f3381e";
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("https://wger.de/api/v2/ingredient/?limit=5000", {
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const englishIngredients = data.results.filter(
          (ingredient) => ingredient.language === 2
        ); // 2 represents English
        const ingredientIds = englishIngredients.map(
          (ingredient) => ingredient.id
        );
        fetch(
          `https://wger.de/api/v2/ingredient-image/?limit=1000&ingredient=${ingredientIds.join(
            ","
          )}`,
          {
            headers: {
              Authorization: `Token ${apiKey}`,
            },
          }
        )
          .then((response) => response.json())
          .then((imageData) => {
            console.log(imageData);
            const ingredientsWithImages = englishIngredients.map(
              (ingredient) => {
                const matchingImageData = imageData.results.find(
                  (image) => image.ingredient_id === ingredient.id
                );
                if (matchingImageData) {
                  return {
                    ...ingredient,
                    image: matchingImageData.image,
                  };
                } else {
                  return {
                    ...ingredient,
                    image:
                      "https://i.pinimg.com/originals/07/15/1f/07151fee466605af9db6f9ad6e60f4b8.jpg",
                  };
                }
              }
            );
            setIngredients(ingredientsWithImages);
          });
      });
  }, []);

  return (
    <Container>
      <Grid container>
        {ingredients.map((ingredient) => (
          <Grid item xs={4}>
            <MealCard
              ingredientName={ingredient.name}
              ingredientImage={ingredient.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MealsContainer;
