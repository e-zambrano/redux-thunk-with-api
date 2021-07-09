import { connect } from "react-redux";
import AddBookPage from "../components/AddBookPage";
import { createBook } from "../redux/actions/bookActions";

const dispatchStateToProps = {
  createBook,
};

export default connect(null, dispatchStateToProps)(AddBookPage);
