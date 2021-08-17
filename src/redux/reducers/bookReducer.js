import * as ActionTypes from "../actions/actionTypes";

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_BOOKS_SUCCESS:
      return action.books;
    case ActionTypes.CREATE_BOOKS_SUCCESS:
      return [...state, action.book];
    case ActionTypes.DELETE_BOOK_SUCCESS:
      return state.filter((b) => b.id !== action.bookId);
    case ActionTypes.UPDATE_BOOK_SUCCESS:
      return state.map((book) =>
        book.id === action.updatedBook.id ? action.updatedBook : book
      );
    default:
      return state;
  }
}
