import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/LogIn/LogIn";
import StudentDashboard from "./components/StudentUI/StudentDashboard.jsx";
import AdminDashboard from "./components/AdminUI/AdminDashboard.jsx";
import TeacherDashboard from "./components/TeacherUI/TeacherDashboard.jsx";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>

    // <StudentDashboard />
    // <AdminDashboard />
    // <TeacherDashboard />
  );
}

export default App;
