import './App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

const App = () => {
  const [alert, setAlert] = useState(false)
  const searchTermRef = useRef("");

  const handleFormSubmit = e => {
    e.preventDefault();
    if (searchTermRef.current.value = ""){
      setAlert(true);
      return;
    }
    setAlert(false);
    console.log(' i am the search term', searchTermRef.current.value);
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
          <Search ref={searchTermRef} handleFormSubmit={handleFormSubmit} alert={alert}/>
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
