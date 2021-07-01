import { handleResponse, handleError } from "./apiUtils";

const bookUrl = "http://localhost:3001/books";

export function getBooks() {
  return fetch(bookUrl).then(handleResponse).catch(handleError);
}

export function saveBook(book) {
  return fetch(bookUrl + (book.id || ""), {
    method: book.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
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
