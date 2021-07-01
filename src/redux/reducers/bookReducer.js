import * as ActionTypes from "../actions/actionTypes";

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_BOOKS_SUCCESS:
      return action.books;
    default:
      return state;
  }
}
