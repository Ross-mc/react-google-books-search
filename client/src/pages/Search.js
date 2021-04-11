import Alert from "../components/Alert"
import Spinner from "../components/Spinner"

const Search = ({ searchTermRef, handleFormSubmit, alert, loading }) => {
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
    {loading ? <Spinner /> : <h1>We found some books</h1>}
    </>
  );
};

export default Search;
