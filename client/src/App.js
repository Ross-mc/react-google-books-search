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
import defaultImg from "./assets/default.png"


const App = () => {
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [booksFromGoogle, setBooksFromGoogle] = useState([]);

  const searchTermRef = useRef("");

  const handleFormSubmit = e => {
    e.preventDefault();
    setLoading(true)
    if (!searchTermRef.current.value){
      setAlert(true);
      return;
    }
    setAlert(false);
    // the google API occasionally does not have all the data required, therefore we have set some default
    // values which will be handled on the render
    API.submitSearch(searchTermRef.current.value)
      .then(res => res.json())
      .then(result => {
        setLoading(false);
        setBooksFromGoogle(result.items.map(({volumeInfo}) => {
          return {
            authors: volumeInfo.authors || "No Authors Available",
            description: volumeInfo.description || "No Description Available",
            image: volumeInfo?.imageLinks?.thumbnail || defaultImg,
            link: volumeInfo.previewLink,
            title: volumeInfo.title
          }
        }))
      })
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
          <Search searchTermRef={searchTermRef} handleFormSubmit={handleFormSubmit} alert={alert} loading={loading} books={booksFromGoogle}/>
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
