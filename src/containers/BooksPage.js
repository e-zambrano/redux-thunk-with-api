import { connect } from "react-redux";
import BooksPage from "../components/BooksPage";
import { loadBooks, deleteBook } from "../redux/actions/bookActions";

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

const dispatchStateToProps = {
  loadBooks,
  deleteBook,
};

export default connect(mapStateToProps, dispatchStateToProps)(BooksPage);
