import React from "react";
import { Switch, Route } from "react-router-dom"
import CaseStudyFacebook from './CaseStudyFacebook';

function App() {
    return (
        <>
          <Switch>
            <Route path="/">
              <CaseStudyFacebook />
            </Route>
          </Switch>
        </>
      )
}

export default App;