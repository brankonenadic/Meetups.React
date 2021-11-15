import React from "react";
import { Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";


function App() {
  return <div>
    <Route path="/all-meetups">
      <AllMeetups />
    </Route>
    <Route path="/new-meetups">
      <NewMeetup />
    </Route>
    <Route path="/favorites">
      <Favorites />
    </Route>
  </div>;
}

export default App;
