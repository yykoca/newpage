import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import data from "./city.list.json";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [cityID, setCityID] = useState(null);
  const [cityData, setCityData] = useState({});
  // const [selectedCity, setSelectedCity] = useState("");
  const apiKey = "7acb6899f20cac69098920ef1aeb6365";
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCityData(data));
  }, [cityID]);

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
    console.log("city array", arrayOfCities);
    setCityID(arrayOfCities[0].id);
    console.log("21", cityID);
    console.log(cityData);
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
      {/* <p>City Name: {city}</p>
      <p>City ID: {cityID}</p> */}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://cdn.pixabay.com/photo/2018/05/22/19/32/clouds-3422258_960_720.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {cityData.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {cityData.name}
              {/* City ID = {cityData.id} <br />
              Coord = Lon: {cityData.coord.lon} Lat: {cityData.coord.lat} <br />
              Temp = {cityData.main.temp} <br />
              Max Temp = {cityData.main.temp_max} <br />
              Min Temp = {cityData.main.temp_min} <br />
              Feels Like = {cityData.main.feels_like} <br />
              Sea Level = {cityData.main.sea_level} <br /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <hr />
      {/* <FormControl className={classes.formControl}>
        <Select
          value={selectedCity}
          onChange={setSelectedCity}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Select a city..
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl> */}
    </div>
  );
}

export default App;
