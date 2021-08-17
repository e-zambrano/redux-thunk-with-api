import * as ActionTypes from "../actions/actionTypes";
import * as bookApi from "../../api/bookApi";

export function loadBooks() {
  return function (dispatch) {
    return bookApi
      .getBooks()
      .then((booksFromApi) => dispatch(loadBooksSuccess(booksFromApi)))
      .catch((error) => console.log(error));
  };
}

export function loadBooksSuccess(books) {
  return {
    type: ActionTypes.LOAD_BOOKS_SUCCESS,
    books,
  };
}

export function createBook(book) {
  return function (dispatch) {
    return bookApi
      .createBook(book)
      .then((newBook) => dispatch(createBookSuccess(newBook)))
      .catch((error) => console.log(error));
  };
}

export function createBookSuccess(book) {
  return {
    type: ActionTypes.CREATE_BOOKS_SUCCESS,
    book,
  };
}

export function deleteBook(bookId) {
  return function (dispatch) {
    return bookApi
      .deleteBook(bookId)
      .then(() => dispatch(deleteBookSuccess(bookId)))
      .catch((error) => console.log(error));
  };
}

export function deleteBookSuccess(bookId) {
  return {
    type: ActionTypes.DELETE_BOOK_SUCCESS,
    bookId,
  };
}

export function updateBook(book) {
  return function (dispatch) {
    return bookApi
      .updateBook(book)
      .then((updatedBook) => dispatch(updateBookSuccess(updatedBook)))
      .catch((error) => console.log(error));
  };
}

export function updateBookSuccess(updatedBook) {
  return {
    type: ActionTypes.UPDATE_BOOK_SUCCESS,
    updatedBook,
  };
}
