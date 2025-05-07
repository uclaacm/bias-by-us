import React from "react";
import "./main.css";
import "./components/mainContent/navbar.css";
import Navbar from "./components/mainContent/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./components/LandingPage";
import CollegeAdmissionsUT from "./caseStudies/CollegeAdmissionsUT";
import CaseStudyFacebook from "./caseStudies/CaseStudyFacebook";
import FacialRecognition from "./caseStudies/FacialRecognition";
import AboutUsPage from "./components/AboutUsPage";
import ResourcesPage from "./components/ResourcesPage";
import ConclusionPage from "./components/ConclusionPage";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="navbar">
          <Routes>
            <Route path="/">
              <Route index element={<Navbar />} />
              <Route path=":currentPage" element={<Navbar />} />
            </Route>
          </Routes>
        </div>

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/college" element={<CollegeAdmissionsUT />} />
          <Route path="/facebook" element={<CaseStudyFacebook />} />
          <Route path="/facialRecognition" element={<FacialRecognition />} />
          <Route path="/conclusion" element={<ConclusionPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
