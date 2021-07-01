import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux/store";
import BooksPage from "./containers/BooksPage";
import AddBook from "./components/AddBook";

const useStyles = makeStyles((_) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ReduxProvider store={store}>
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" component={Link} to={"/books"}>
                List of Books
              </Button>
              <Button color="inherit" component={Link} to={"/add-book"}>
                Add a new Book
              </Button>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route path="/books">
              <BooksPage />
            </Route>
            <Route path="/add-book">
              <AddBook />
            </Route>
          </Switch>
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;
