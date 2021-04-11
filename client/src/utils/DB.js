const DB = {
  saveBook: book => {
    return fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
  },
  getBooks: () => {
    return fetch("api/books")
  },
  deleteBook: (_id) => {
    return fetch(`api/books/${_id}`, {
      method: "DELETE"
    })
  }
}

export default DB