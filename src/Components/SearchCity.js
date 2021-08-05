import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

export default function SearchCity({ inputValue, setInputValue, setCity }) {
  const useStyles = makeStyles({
    root: {
      width: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  const getCity = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputValue);
  };

  return (
    <Container fluid>
      <form
        style={{ margin: "0 auto" }}
        className={classes.root}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          style={{ margin: "0 5px 0 0" }}
          id="standard-secondary"
          label="City Name"
          color="secondary"
          defaultValue={inputValue}
          onChange={getCity}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          style={{ margin: "3px 0 10px 0" }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
