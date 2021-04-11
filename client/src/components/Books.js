import Book from "./partials/Book"

const Books = ({books, parent, deleteBtnClickHandler, saveBookHandler}) => {
  return (
    <div className="books-container">
      {books.map((book, index) => (
        <Book
          book={book}
          key={`${book.title}-${index}`}
          parent={parent}
          deleteBtnClickHandler={deleteBtnClickHandler}
          saveBookHandler={saveBookHandler}
        />
      ))}
    </div>
  );
}

export default Books