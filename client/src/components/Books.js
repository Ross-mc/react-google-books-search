import Book from "./partials/Book"

const Books = ({books, parent, deleteBtnClickHandler}) => {
  return (
    <div className="books-container">
      {books.map(book => <Book book={book} key={book.title} parent={parent} deleteBtnClickHandler={deleteBtnClickHandler}/>)}
    </div>
  )
}

export default Books