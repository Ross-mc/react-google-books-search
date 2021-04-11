import Alert from "../components/Alert";
import Books from "../components/Books";
import Spinner from "../components/Spinner";
import DB from "../utils/DB"

const Search = ({ searchTermRef, handleFormSubmit, alert, loading, books }) => {

  const saveBookHandler = (book) => {
    DB.saveBook(book)
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }; 

  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="booksearch">Search</label>
        <input
          type="text"
          ref={searchTermRef}
          className="form-control"
          id="booksearch"
          placeholder="Search for Books, Authors, Characters...."
        />
        {alert && <Alert />}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    {loading && <Spinner />}
    {books.length > 0 && <Books books={books} parent={"search"} saveBookHandler={saveBookHandler}/>}
    </>
  );
};

export default Search;
