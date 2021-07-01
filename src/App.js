import React from "react";
import "./main.css";
import Navbar from "./components/mainContent/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        {/* conditionally render the heading in navbar */}
        <Switch>
          {/* render default navbar if URL is empty */}
          <Route exact path="/">
            <div className="navbar">
              <Navbar 
                path="/" 
                subtitle={getHeader()} 
              />
            </div>
          </Route>
          {/* pass in URL through params if it's not the default URL */}
          <Route
            path="/:currentPage"
            render={(input) => (
              <div className="navbar">
                <Navbar 
                  path={"/" + input.match.params.currentPage} 
                  subtitle={getHeader(input.match.params.currentPage)} 
                />
              </div>
            )}
          ></Route>
        </Switch>

        <Switch>
          <Route exact path="/"><LandingPage /></Route>
          <Route path="/aboutUs"><AboutUsPage /></Route>
          <Route path="/college"><CollegeAdmissionsUT /></Route>
          <Route path="/facebook"><CaseStudyFacebook /></Route>
          <Route path="/facialRecognition"><FacialRecognition /></Route>
          <Route path="/conclusion"><ConclusionPage /></Route>
          <Route path="/resources"><ResourcesPage /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//function that renders the heading for the navbar from the route parameters
function getHeader(path) {
  let subtitle = "A TeachLA Learning Lab!";
  const pageNames = {
    aboutUs: "Who's TeachLA?",
    college: "Case Study #1: College Admissions",
    facebook: "Case Study #2: Facebook Ads",
    facialRecognition: "Case Study #3: Facial Recognition",
    conclusion: "In Conclusion...",
    resources: "To Learn More...",
  };
  //return default dictionary value if path is falsy

  //get the subtitle from our pageNames dictionary if path exists
  if (path)
    ({ [path]: subtitle } = pageNames);
  return subtitle;
}
