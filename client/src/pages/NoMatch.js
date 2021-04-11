import {Link} from "react-router-dom"

const NoMatch = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Ooooops!</h1>
      <p className="lead">
      We couldn't find the page you were looking for
      </p>
      <hr className="my-4" />
      <p>
        Try these links below!
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

export default NoMatch