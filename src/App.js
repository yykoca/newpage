import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import data from "./city.list.json";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [cityID, setCityID] = useState(null);
  const [cityData, setCityData] = useState({});
  const apiKey = "7acb6899f20cac69098920ef1aeb6365";

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  const getCity = (e) => {
    setCity(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("abc", city);

    const arrayOfCities = data.filter(
      (stadt) => stadt.name.includes(city) && stadt.country === "DE"
    );
    setCityID(arrayOfCities[0].id);
    console.log("2", cityID);
  }

  useEffect(() => {
      const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`;
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCityData(data));
    
  }, [cityID])

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
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      <p>City Name: {city}</p>
      <p>City ID: {cityID}</p>
      <hr />
      <h1>{cityData.name}</h1>
    </div>
  );
}

export default App;
