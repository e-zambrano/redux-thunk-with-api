import { combineReducers } from "redux";

import books from "./bookReducer";
import user from "./userReducer";

export default combineReducers({ books, user });
