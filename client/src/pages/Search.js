import Alert from "../components/Alert"

const Search = ({ searchTermRef, handleFormSubmit, alert }) => {
  return (
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
  );
};

export default Search;
