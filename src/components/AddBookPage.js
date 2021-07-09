import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    padding: 50,
    width: 650,
  },
  title: {
    marginBottom: 8,
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },
  button: {
    marginRight: 20,
  },
});

function AddBookPage(props) {
  const classes = useStyles();
  let history = useHistory();
  const [book, setBook] = useState({ title: "", category: "" });

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setBook((previousBook) => ({
      ...previousBook,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault(); //prevent from page to reload

    props.createBook(book).then(() => history.push("/books"));
  }

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography className={classes.title} variant="h5">
        Add a new book
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          required
          className={classes.textField}
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          value={book.title}
          onChange={handleInputChanges}
        />
        <TextField
          className={classes.textField}
          fullWidth
          name="category"
          label="Category"
          variant="outlined"
          value={book.category}
          onChange={handleInputChanges}
        />
        <div>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Add
          </Button>
          <Button variant="outlined" component={Link} to={"/books"}>
            Cancel
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default AddBookPage;
