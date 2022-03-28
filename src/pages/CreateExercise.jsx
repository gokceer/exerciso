import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateExercise.css";

const CreateExercise = () => {
  const [exercise, setExercise] = useState({ title: "", details: "" });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setExercise({
      ...exercise,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleCreateExercise = (evt) => {
    evt.preventDefault();

    const newExercise = {
      title: exercise.title,
      details: exercise.details,
      complete: false,
      id: Math.floor(Math.random() * 1000),
    };

    fetch(`http://localhost:3111/exercises`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExercise),
    })
      .then(() => {
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleCreateExercise}>
      <label>Title</label>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        value={exercise.title}
        maxLength="15"
        required
      ></input>
      <label>Details</label>
      <textarea
        name="details"
        cols="30"
        rows="10"
        value={exercise.details}
        onChange={handleChange}
        required
      ></textarea>
      <button>Add Exercise</button>
    </form>
  );
};

export default CreateExercise;
