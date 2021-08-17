import { connect } from "react-redux";
import SignInPage from "../components/SignInPage";
import { signInUser } from "../redux/actions/userActions";

const dispatchStateToProps = {
  signInUser,
};

export default connect(null, dispatchStateToProps)(SignInPage);
