import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <>

    <Router>
    <header>
      <Navbar />
    </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
