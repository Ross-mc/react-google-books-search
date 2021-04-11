import './App.css';
import React, {useState, useRef} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import API from "./utils/API"

const App = () => {
  const [alert, setAlert] = useState(false);
  const searchTermRef = useRef("");

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!searchTermRef.current.value){
      setAlert(true);
      return;
    }
    setAlert(false);
    API.submitSearch(searchTermRef.current.value).then(res => res.json()).then(result => console.log(result))
  }


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
          <Search searchTermRef={searchTermRef} handleFormSubmit={handleFormSubmit} alert={alert}/>
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
