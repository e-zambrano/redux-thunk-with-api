import { handleResponse, handleError, getHeaders } from "./apiUtils";

const bookUrl = `${process.env.REACT_APP_API_URL}/books`;

export function getBooks() {
  return fetch(bookUrl, {
    headers: getHeaders(),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function createBook(book) {
  return fetch(bookUrl, {
    method: "POST", // POST for create
    headers: getHeaders(),
    body: JSON.stringify(book),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBook(bookId) {
  return fetch(`${bookUrl}/${bookId}`, {
    method: "DELETE",
    headers: getHeaders(),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateBook(book) {
  return fetch(`${bookUrl}/${book.id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(book),
  })
    .then(handleResponse)
    .catch(handleError);
}
