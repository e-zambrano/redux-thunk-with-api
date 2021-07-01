import { connect } from "react-redux";
import BooksPage from "../components/BooksPage";
import { loadBooks } from "../redux/actions/bookActions";

function maptStateToProps(state) {
  return {
    books: state.books,
  };
}

const dispatchStateToProps = {
  loadBooks,
};

export default connect(maptStateToProps, dispatchStateToProps)(BooksPage);
