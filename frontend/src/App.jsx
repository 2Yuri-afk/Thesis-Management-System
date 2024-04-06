import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
