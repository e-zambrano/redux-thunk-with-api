import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    width: 650,
  },
  row: {
    "&:hover": {
      "& $actionButton": {
        opacity: 1,
      },
    },
  },
  actionButton: {
    opacity: 0,
  },
});

function BookPage(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.books.length === 0) {
      props.loadBooks();
    }
  }, []);

  function handleDeleteBook(bookId) {
    props.deleteBook(bookId);
  }

  return (
    <TableContainer className={classes.paper} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.books.map((book) => (
            <TableRow key={book.id} className={classes.row}>
              <TableCell>{book.id}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.category}</TableCell>
              <TableCell>
                <IconButton
                  className={classes.actionButton}
                  color="primary"
                  aria-label="delete book"
                  component="span"
                  onClick={() => handleDeleteBook(book.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  className={classes.actionButton}
                  color="primary"
                  aria-label="update book"
                  component={Link}
                  to={`/edit-book/${book.id}`}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BookPage;
