import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function WheatherCity({ cityData }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  return (
    <div>
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
              {cityData.weather}
            </Typography>
            <Typography gutterBottom variant="h2" component="h2">
              {cityData.temp}°
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Y:{cityData.temp_max}° D:{cityData.temp_min}°
            </Typography>

            <br /> <br />
            <br /> <br />
            
            
            <Typography variant="body2" color="textSecondary" component="p">
              ID: {cityData.id} <br />
              Name: {cityData.name} <br />
              Lat: {cityData.lat} <br />
              Lon: {cityData.lon} <br />
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
    </div>
  );
}

export default WheatherCity;
