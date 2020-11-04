import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Birth from "./components/pages/birth";
import Cep from "./components/pages/cep";
import Mother from "./components/pages/mother";
import Name from "./components/pages/name";
import Rg from "./components/pages/rg";
import UsersList from "./components/pages/users";

require('dotenv').config()



export default function App() {
  return (
    <Router >

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Switch>
        <Route exact path="/">
          <Rg></Rg>
        </Route>
        <Route exact path="/name/">
          <Name></Name>
        </Route>
        <Route exact path="/birth">
          <Birth></Birth>
        </Route>
        <Route exact path="/mother">
          <Mother></Mother>
        </Route>
        <Route exact path="/cep">
          <Cep></Cep>
        </Route>
        <Route exact path="/users-list">
          <UsersList></UsersList>
        </Route>
      </Switch>

    </Router>
  );
}

