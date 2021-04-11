import {useState, useEffect} from "react";
import Spinner from "../components/Spinner";
import Books from "../components/Books";
import DB from "../utils/DB";


const Saved = () => {
  const [booksFromDatabase, setBooksFromDatabase] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    DB.getBooks()
      .then(res => res.json())
      .then(result => {
        setLoading(false)
        setBooksFromDatabase(result);
      })
      .catch(err => {
        setLoading(false)
        setBooksFromDatabase([]);
        console.log(err)
      })
  }, []);

  const deleteBtnClickHandler = (idToDelete) => {
    // we filter the current set of books, we assume the deletion was successful
    setBooksFromDatabase(booksFromDatabase.filter(({_id}) => _id !== idToDelete));
    DB.deleteBook(idToDelete);
  }

  return (
    <>
    <h2>Saved Books</h2>
    {loading ? <Spinner /> : booksFromDatabase.length > 0 ? <Books books={booksFromDatabase} parent={"saved"} deleteBtnClickHandler={deleteBtnClickHandler}/> : <h1>No Books are currently available in our Database,</h1>}
    </>
  )
};

export default Saved