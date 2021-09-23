import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import RedirectAfter from "./components/redirectAfter";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/:id" exact>
            <LandingPage />
          </Route>
          <Route path="/share/:id">
            <RedirectAfter />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
