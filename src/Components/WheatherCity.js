import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

function WheatherCity({ cityData }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    card: {
      width: "100%",
      borderRadius: 16,
      boxShadow: "0 8px 16px 0 #BDC9D7",
      overflow: "hidden",
    },
  });

  const classes = useStyles();

  return (
    <Container maxWidth="sm" align="center">
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
            <Typography gutterBottom variant="body1" component="p">
              {cityData.weather} <br /> ({cityData.description})
            </Typography>
            <Typography gutterBottom variant="h2" component="h2">
              {cityData.temp}°
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Y:{cityData.temp_max}° D:{cityData.temp_min}°
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <br />
              Lat: {cityData.lat} Lon: {cityData.lon} <br />
              Pressure: {cityData.pressure} hPa <br />
              Humidity: {cityData.humidity}% <br />
              Wind: {cityData.windSpeed} mps {cityData.windDeg}° <br />
              Sunrise: {cityData.sunrise} | Sunset: {cityData.sunset}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default WheatherCity;
