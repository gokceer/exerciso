import React, { useState, useEffect } from "react";
import ExercisesList from "../components/ExercisesList";

const HomePage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // fetch exercise data
    const fetchExercises = async () => {
      try {
        const response = await fetch("http://localhost:3111/exercises");
        const fetchedExercises = await response.json();
        setExercises(fetchedExercises);
        console.log("GOKCE ", fetchedExercises);
      } catch (error) {
        console.log(error);
      }
    };

    return fetchExercises();
  }, []);

  const deleteExerciseHandler = (id) => {
    const filteredExercises = exercises.filter(
      (exercise) => exercise.id !== id
    );
    setExercises(filteredExercises);
  };

  const toggleExerciseHandler = (id) => {
    const clonedExercises = [...exercises];
    const exerciseIndex = clonedExercises.findIndex(
      (exercise) => exercise.id === id
    );
    const clickedExerciseObj = clonedExercises[exerciseIndex];
    clickedExerciseObj.complete = !clickedExerciseObj.complete;
    setExercises(clonedExercises);
  };

  return (
    <ExercisesList
      exercises={exercises}
      onDeleteExercise={deleteExerciseHandler}
      onToggleExercise={toggleExerciseHandler}
    />
  );
};

export default HomePage;
