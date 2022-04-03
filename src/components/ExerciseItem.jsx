import React from "react";
import { Link } from "react-router-dom";
import "../styles/ExerciseItem.css";

const ExerciseItem = (props) => {
  const { complete, details, id, title } = props.exercise;

  const deleteExercise = () => {
    fetch(`http://localhost:3111/exercises/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        props.onDeleteExercise(id);
      })
      .catch((error) => console.log(error));
  };

  const exerciseToggle = () => {
    fetch(`http://localhost:3111/exercises/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ complete: !complete }),
    })
      .then(() => {
        props.onToggleExercise(id);
      })
      .catch((error) => console.log(error));
  };

  const classes = ["exercise"];
  if (complete) {
    classes.push("complete");
  }
  return (
    <div className={classes.join(" ")}>
      <div className="actions">
        <h4> {title} </h4>
        <div className="buttons">
          <button onClick={deleteExercise}>Delete</button>
          <Link to={`/exercises/${props.exercise.id}/edit`}>Edit</Link>
          <button onClick={exerciseToggle}>Toggle</button>
        </div>
      </div>
      <div className="details">
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ExerciseItem;
