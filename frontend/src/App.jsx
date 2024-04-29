import SignUp from "./components/SignUp/SignUp.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import StudentDashboard from "./components/StudentUI/StudentDashboard.jsx";
import AdminDashboard from "./components/AdminUI/AdminDashboard.jsx";
import TeacherDashboard from "./components/TeacherUI/TeacherDashboard.jsx";
import AdviserDashboard from "./components/AdviserUI/AdviserDashboard.jsx";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LogIn />} />
    //   <Route path="/SignUp" element={<SignUp />} />
    // </Routes>

    // <StudentDashboard />
    // <AdminDashboard />
    // <TeacherDashboard />
    <AdviserDashboard />
  );
}

export default App;
