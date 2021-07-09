import * as ActionTypes from "../actions/actionTypes";

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_BOOKS_SUCCESS:
      return action.books;
    case ActionTypes.CREATE_BOOKS:
      return [...state, action.book];
    default:
      return state;
  }
}
