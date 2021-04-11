import {Link, useLocation} from "react-router-dom"

const Navbar = () => {
  const currentPageClass = "nav-item nav-link active";
  const notCurrentPageClass = "nav-item nav-link";
  const location = useLocation()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Google Books Search
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className={location.pathname === "/" ? currentPageClass : notCurrentPageClass } to="/">
            Home
          </Link>
          <Link className={location.pathname === "/search" ? currentPageClass : notCurrentPageClass } to="/search">
          Search Books
          </Link>
          <Link className={location.pathname === "/saved" ? currentPageClass : notCurrentPageClass } to="/saved">
          Saved Books
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
