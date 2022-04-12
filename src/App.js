
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import UserContext from "./Context";
import Header from "./Header";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <UserContext.Provider value={'hello from context'}>

          {/* <Switch> */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* </Switch> */}

        </UserContext.Provider>
      </div>
    </Router>
  );
}
