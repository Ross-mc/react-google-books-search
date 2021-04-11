import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const currentPageClass = "nav-item nav-link text-dark";
  const notCurrentPageClass = "nav-item nav-link text-muted";
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <Link className="navbar-brand" to="/">
        Google Books Search
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className={
              location.pathname === "/" ? currentPageClass : notCurrentPageClass
            }
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === "/search"
                ? currentPageClass
                : notCurrentPageClass
            }
            to="/search"
          >
            Search Books
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={
              location.pathname === "/saved"
                ? currentPageClass
                : notCurrentPageClass
            }
            to="/saved"
          >
            Saved Books
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
