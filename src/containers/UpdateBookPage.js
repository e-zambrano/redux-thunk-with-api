import { connect } from "react-redux";
import UpdateBookPage from "../components/UpdateBookPage";
import { updateBook } from "../redux/actions/bookActions";

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.match.params; //id is a string '1', or '2'

  return {
    book: state.books.find((book) => book.id === +id),
  };
}

const mapDispatchToProps = {
  updateBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBookPage);
