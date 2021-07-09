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
    type: ActionTypes.CREATE_BOOKS,
    book,
  };
}
