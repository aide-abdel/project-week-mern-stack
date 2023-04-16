import React from 'react'
import Appbar from '../components/appbar'
import ExercisesHomeContainer from '../components/exercises/ExercisesHomeContainer'
import MealsContainer from '../components/meals/MealsContainer'

function Exercises() {
  return (
    <div>
        <Appbar/>
        <ExercisesHomeContainer/>
        <MealsContainer/>
    </div>
  )
}

export default Exercises