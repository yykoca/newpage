import React from 'react'
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function WheatherCity({cityData}) {
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
            <Typography variant="body2" color="textSecondary" component="p">
              {cityData.name}{cityData.timezone}
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
        </div>
    )
}

export default WheatherCity
