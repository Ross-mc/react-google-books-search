const API = {
  submitSearch: query => {
    return fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        searchTerm: query
      })
    })
  }
}

module.exports = API