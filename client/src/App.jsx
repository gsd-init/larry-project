import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookLanding from "./pages/BookLandingPage";
import "./styles/style.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/book" component={BookLanding} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
