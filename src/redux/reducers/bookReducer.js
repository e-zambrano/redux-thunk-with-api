import * as ActionTypes from "../actions/actionTypes";

//reduces modified the state
export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_BOOKS_SUCCESS:
      return action.books;
    case ActionTypes.CREATE_BOOKS:
      return [...state, action.book];
    case ActionTypes.DELETE_BOOK_SUCCESS:
      return state.filter((b) => b.id !== action.bookId);
    default:
      return state;
  }
}
