import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/CreateExercise.css";

const EditExercise = () => {
  const [exercise, setExercise] = useState({ title: "", details: "" });
  const navigate = useNavigate();
  const params = useParams();
  const exerciseId = params.id;

  useEffect(() => {
    fetch(`http://localhost:3111/exercises/${exerciseId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExercise({ title: data.title, details: data.details });
      })
      .catch((err) => console.log(err));
  }, [exerciseId]);

  const handleChange = (evt) => {
    setExercise({
      ...exercise,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleUpdateExercise = (evt) => {
    evt.preventDefault();

    fetch(`http://localhost:3111/exercises/${exerciseId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exercise),
    })
      .then(() => {
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleUpdateExercise}>
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
      <button>Update Exercise</button>
    </form>
  );
};

export default EditExercise;
