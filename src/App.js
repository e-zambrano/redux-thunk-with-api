import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux/store";
import BooksPage from "./containers/BooksPage";
import AddBookPage from "./containers/AddBookPage";
import UpdateBookPage from "./containers/UpdateBookPage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./containers/SignInPage";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  appBar: {
    marginBottom: 16,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ReduxProvider store={store}>
      <Router>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.root}>
            <div>
              <Button color="inherit" component={Link} to={"/books"}>
                List of Books
              </Button>
              <Button color="inherit" component={Link} to={"/add-book"}>
                Add a new Book
              </Button>
            </div>
            <div>
              <Button color="inherit" component={Link} to={"/sign-in"}>
                Sign in
              </Button>
              <Button color="inherit" component={Link} to={"/sign-up"}>
                Sign up
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/books" component={BooksPage} />
          <Route path="/add-book" component={AddBookPage} />
          <Route path="/edit-book/:id" component={UpdateBookPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/sign-in" component={SignInPage} />
        </Switch>
      </Router>
    </ReduxProvider>
  );
}

export default App;
