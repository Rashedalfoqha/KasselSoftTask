import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { createContext, useState } from "react";
import Home from "./components/Home/Home";
import AddCourses from "./components/addCourses/AddCourses";
import Courses from "./components/courses/Courses";
import Nav from "./components/navbar/Nav";
import PersonalPage from "./components/personalPage/PersonalPage";
import CoursesDeatils from "./components/oneCourses/CoursesDeatils";

export const userContext = createContext();
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  return (
    <>
      <userContext.Provider value={{ token, userId, isLoggedIn, role }}>
        <Nav />{" "}
        <Routes>
          {" "}
          <Route path="/" element={isLoggedIn && <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/courses"
            element={role === 1 ? <AddCourses /> : <Courses />}
          />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/newcourses" element={<AddCourses />} />
          <Route path="/deatils/:id" element={<CoursesDeatils />} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;
