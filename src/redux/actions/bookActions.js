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

//is in charge of calling the API
//using redux-thunk under the hood
export function deleteBook(bookId) {
  return function (dispatch) {
    //connect to the outside - API
    //start of the API call
    return (
      bookApi
        .deleteBook(bookId)
        //end of the API call
        .then(() => dispatch(deleteBookSuccess(bookId))) //when the API call was successful
        .catch((error) => console.log(error))
    ); //when the API cal was not successful
  };
}

//is in charge of telling the Store that the previous event was successful
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
