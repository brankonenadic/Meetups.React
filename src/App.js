import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Navigation from './layout/Navigation';

function App() {
  return <div>
    <Navigation />
    <Switch>
    <Route path="/" exact>
      <AllMeetups />
    </Route>
    <Route path="/new-meetups">
      <NewMeetup />
    </Route>
    <Route path="/favorites">
      <Favorites />
    </Route>
    </Switch>
  </div>;
}

export default App;
