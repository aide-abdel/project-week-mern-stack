import React, { useState, useEffect } from "react";

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
                  return ingredient;
                }
              }
            );
            setIngredients(ingredientsWithImages);
          });
      });
  }, []);

  return (
    <div>
      <h1>Ingredients</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <h2>{ingredient.name}</h2>
            {ingredient.image && (
              <img src={ingredient.image} alt={ingredient.name} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealsContainer;
