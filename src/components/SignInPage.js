import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    width: 400,
  },
  title: {
    marginBottom: 16,
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },
  button: {
    marginRight: 20,
  },
});

function SignIpPage(props) {
  const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setUser((previoususer) => ({
      ...previoususer,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    props
      .signInUser(user)
      .then(() => props.history.push("/books"))
      .catch((error) => setError(error));
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h4">
          Sign in to book-it
        </Typography>
        <div>{error}</div>
        <form onSubmit={handleFormSubmit}>
          <TextField
            required
            className={classes.textField}
            fullWidth
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            value={user.email}
            onChange={handleInputChanges}
          />
          <TextField
            required
            className={classes.textField}
            fullWidth
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={user.password}
            onChange={handleInputChanges}
          />
          <div>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
            <Button variant="outlined" color="primary">
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default SignIpPage;
