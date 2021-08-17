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

function SignUpPage(props) {
  const classes = useStyles();

  const [newUser, setNewUser] = useState({ email: "", password: "", name: "" });

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setNewUser((previousNewUser) => ({
      ...previousNewUser,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(newUser);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h4">
          Sign up to book-it
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            required
            className={classes.textField}
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            value={newUser.name}
            onChange={handleInputChanges}
          />
          <TextField
            required
            className={classes.textField}
            fullWidth
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            value={newUser.email}
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
            value={newUser.password}
            onChange={handleInputChanges}
          />
          <div>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Sign up
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

export default SignUpPage;
