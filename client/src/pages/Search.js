import Alert from "../components/Alert";
import Books from "../components/Books";
import Failure from "../components/FailureAlert";
import Spinner from "../components/Spinner";
import Success from "../components/SuccessAlert";


const Search = ({ searchTermRef, handleFormSubmit, alert, loading, books, saveBookHandler, success, failure }) => {


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
    {success && <Success />}
    {failure && <Failure />}
    {loading && <Spinner />}
    {books.length > 0 && <Books books={books} parent={"search"} saveBookHandler={saveBookHandler}/>}
    </>
  );
};

export default Search;
