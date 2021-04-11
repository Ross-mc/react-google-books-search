import {Link} from "react-router-dom";

const Book = ({book, parent}) => {
  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src={book.image}
        alt="cover art of book"
      />
      <h5 className="card-title">{book.title}</h5>
      {book.authors.length > 0 ? (
        <h6 className="card-subtitle mb-2 text-muted">
          Written by: {book.authors.join(", ")}
        </h6>
      ) : (
        <h6 className="card-subtitle mb-2 text-muted">
          No Author Information Available
        </h6>
      )}
      <p className="card-text">
        {book.description.length > 800
          ? book.description.slice(0, 800) + "..."
          : book.description}
      </p>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item flex-fill">
          <Link
            className="btn btn-primary btn-small"
            to={book.link}
            role="button"
          >
            View on Google
          </Link>
        </li>
        <li className="list-group-item flex-fill">
          {parent === "search" ? (
            <button className="btn btn-success btn-small" role="button">
              Save to Database
            </button>
          ) : (
            <button className="btn btn-danger btn-small" role="button">
              Delete from Database
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}


export default Book