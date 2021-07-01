import * as ActionTypes from "../actions/actionTypes";
import * as bookApi from "../../api/bookApi";

export function loadBooks() {
  return function (dispatch) {
    return bookApi
      .getBooks()
      .then((books) => dispatch(loadBooksSuccess(books)))
      .catch((error) => console.log(error));
  };
}

export function loadBooksSuccess(books) {
  return {
    type: ActionTypes.LOAD_BOOKS_SUCCESS,
    books,
  };
}
