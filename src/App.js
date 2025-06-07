import "./App.css";
import AdminDashboard from "./components/AdminDashboard/adminDashboard";
import Users from "./components/Users/Users";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import FacultyNavbar from "./components/NavBar/FacultyNavbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from './theme';

import Faculty from "./components/Users/Faculty";
import Career from "./components/Users/Career";
import UserRegistration from "./components/code/UserRegistrationUI";
import Login from "./components/Login/Login";
import { useContext } from "react";
import QuestionUpload from "./components/FacultyDashboard.js/QuestionUploadForm/QuestionUpload";
import DataContext from "./context/DataContext";
import FacultyDashboard from "./components/FacultyDashboard.js/adminDashboard";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import StudentNav from "./components/NavBar/StudentNav";
function App() {
  const ctx = useContext(DataContext);
  const manage = ctx.manage;
  
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          height: "100%",
          backgroundColor: "rgb(249, 250, 251)",
        }}
      >
      <CssBaseline />
      {manage.usertype ==="admin" && manage.isLoggedIn && <NavBar />}
      {manage.usertype ==="faculty" && manage.isLoggedIn && <FacultyNavbar />}
      {manage.usertype ==="student" && manage.isLoggedIn && <StudentNav/>}
 

      <main
        style={{
          flexGrow: 1,
          padding: "2em",
          height: "100%",
        }}
      >
        <Routes>

          <Route path='/' element={<Login ></Login>}/>
          
          {manage.isLoggedIn && <Route path='/dashboard' element={<AdminDashboard />} />}
          {manage.isLoggedIn && <Route path='/facultydashboard' element={<FacultyDashboard />} />}
          {manage.isLoggedIn && <Route path="/student" element={<StudentDashboard  />} />}
          {manage.isLoggedIn && <Route path='/users' element={<Users authToken={manage.authToken} />} />}
          {manage.isLoggedIn && <Route path='/faculty' element={<Faculty authToken={manage.authToken} />} />}
          {manage.isLoggedIn && <Route path='/career' element={<Career authToken={manage.authToken} />} />}
          {manage.isLoggedIn && <Route path='/registerUser' element={<UserRegistration />} />}
         {manage.isLoggedIn && <Route path='/questionUpload' element={<QuestionUpload/>} />}
      
          
       
       

        </Routes>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
