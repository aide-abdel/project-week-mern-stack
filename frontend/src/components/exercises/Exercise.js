import React, { useEffect, useState } from "react";

function Exercise() {
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
    <div>
      <h1>List of Exercises</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => {
            const imageUrl = `${exercise.images[0].image}`;
            return (
              <tr key={exercise.id}>
                <td>{exercise.name}</td>
                <td>{exercise.description.replace(/(<([^>]+)>)/gi, "")}</td>
                <td>{exercise.category.name}</td>
                <td>
                  <img src={imageUrl} alt={exercise.name} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Exercise;
