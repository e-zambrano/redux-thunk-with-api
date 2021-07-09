import { handleResponse, handleError } from "./apiUtils";

const bookUrl = "http://localhost:3001/books";

export function getBooks() {
  return fetch(bookUrl).then(handleResponse).catch(handleError);
}

export function createBook(book) {
  return fetch(bookUrl, {
    method: "POST", // POST for create
    headers: { "content-type": "application/json" },
    body: JSON.stringify(book),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBook(bookId) {
  return fetch(bookUrl + bookId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
