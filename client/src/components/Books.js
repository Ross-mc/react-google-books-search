import Book from "./partials/Book"

const Books = ({books}) => {
  return (
    <div className="books-container">
      {books.map(book => <Book book={book} key={book.title}/>)}
    </div>
  )
}

export default Books