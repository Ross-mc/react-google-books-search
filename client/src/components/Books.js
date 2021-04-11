import Book from "./partials/Book"

const Books = ({books, parent}) => {
  return (
    <div className="books-container">
      {books.map(book => <Book book={book} key={book.title} parent={parent}/>)}
    </div>
  )
}

export default Books