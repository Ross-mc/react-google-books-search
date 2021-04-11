import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, {useState, useRef} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import API from "./utils/API"
import DB from "./utils/DB";
import defaultImg from "./assets/default.png"


const App = () => {
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [booksFromGoogle, setBooksFromGoogle] = useState([]);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

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
        setBooksFromGoogle([])
        setBooksFromGoogle(result.items.reduce((acc, {volumeInfo}) => {
          if (volumeInfo.language !== "en"){
            return acc
          }
          const book = {
            authors: volumeInfo.authors || [],
            description: volumeInfo.description || "No Description Available",
            image: volumeInfo?.imageLinks?.thumbnail || defaultImg,
            link: volumeInfo.previewLink,
            title: volumeInfo.title
          }
          acc.push(book)
          return acc
        }, []))
      })
  }

  const saveBookHandler = (book) => {
    DB.saveBook(book)
      .then((res) => res.json())
      .then((result) => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000)
      })
      .catch((err) => {
        setFailure(true);
        setTimeout(() => setFailure(false), 2000)
      });
  }; 


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
            <Search
              searchTermRef={searchTermRef}
              handleFormSubmit={handleFormSubmit}
              alert={alert}
              loading={loading}
              books={booksFromGoogle}
              saveBookHandler={saveBookHandler}
              success={success}
              failure={failure}
            />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
