import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateExercise from "./pages/CreateExercise";
import Navbar from "./components/Navbar";
import EditExercise from "./pages/EditExercise";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} exact />
        <Route path="/create-exercise" element={<CreateExercise />} exact />
        <Route path="/exercises/:id/edit" element={<EditExercise />} exact />
      </Routes>
    </div>
  );
}

export default App;
