import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function SearchCity({ data, city, setCity, setCityID }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  const getCity = (e) => {
    setCity(e.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    const arrayOfCities = data.filter(
      (stadt) => stadt.name.includes(city) && stadt.country === "DE"
    );
    setCityID(arrayOfCities[0].id);
    // console.log(cityData.coord.lon);
    // setLat(cityData.coord.lat);
    // setLon(cityData.coord.lon);
  }
  return (
    <div>
      <form
        className={classes.root}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-secondary"
          label="City Name"
          color="secondary"
          defaultValue={city}
          onChange={getCity}
        />
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}