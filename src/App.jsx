import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dash from "./Components/Dash";
import LoginForm from "./Components/auth/Login";
import SignupForm from "./Components/auth/Signup";
import HomePage from "./Components/HomePage";

import MainDash from "./Components/Parts/MainDash";
import { BlogDash } from "./Components/Parts/BlogDash";
import StudyMaterial from "./Components/Parts/StudyMatrial";



function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        {/* //create nested route */}

        <Route path="/dash/" element={<Dash />}>
          <Route path="blogs" element={<BlogDash/>}  />
          <Route path="studyMaterial" element={<StudyMaterial/>}  />



        </Route>

        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
