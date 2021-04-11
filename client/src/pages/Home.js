import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Google Books Search</h1>
      <p className="lead">
        An application for searching a storing books found through the Google Books API.
      </p>
      <hr className="my-4" />
      <p>
        Select from the links below to search for books or see books already saved in our database
      </p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/search" role="button">
          Search Books
        </Link>
        <Link className="btn btn-primary btn-lg" to="/saved" role="button">
          Saved Books
        </Link>
      </p>
    </div>
  );
};

export default Home;
