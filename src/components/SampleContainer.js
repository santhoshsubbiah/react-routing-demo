import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import samples from "../assets/sample-list";
import WelcomePage from "../pages/WelcomePage";
function SampleContainer() {
  return (
    <div>
      <Switch>
        {samples.map((sample, index) => {
          return (
            <Route
              exact
              key={index}
              path={sample.path}
              component={sample.component}
            ></Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default SampleContainer;
