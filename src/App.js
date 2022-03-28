import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateExercise from "./pages/CreateExercise";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} exact />
        <Route path="/create-exercise" element={<CreateExercise />} exact />
      </Routes>
    </div>
  );
}

export default App;
