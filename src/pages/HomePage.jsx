import React, { useState, useEffect } from "react";
import BaseFilter from "../components/BaseFilter";
import ExercisesList from "../components/ExercisesList";

const HomePage = () => {
  const [exercises, setExercises] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const updateFilterHandler = (newFilter) => {
    setCurrentFilter(newFilter);
  };

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

  let JSX = (
    <ExercisesList
      exercises={exercises}
      onDeleteExercise={deleteExerciseHandler}
      onToggleExercise={toggleExerciseHandler}
    />
  );

  if (currentFilter === "completed") {
    JSX = (
      <ExercisesList
        exercises={exercises.filter((exercise) => exercise.complete)}
        onDeleteExercise={deleteExerciseHandler}
        onToggleExercise={toggleExerciseHandler}
      />
    );
  } else if (currentFilter === "pending") {
    JSX = (
      <ExercisesList
        exercises={exercises.filter((exercise) => !exercise.complete)}
        onDeleteExercise={deleteExerciseHandler}
        onToggleExercise={toggleExerciseHandler}
      />
    );
  }

  return (
    <div>
      <BaseFilter onUpdate={updateFilterHandler} />
      {JSX}
    </div>
  );
};

export default HomePage;
