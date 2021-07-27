import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function ControllableStates({ city, setCity, cities }) {
  const [inputValue, setInputValue] = React.useState("");
  const classes = useStyles();
  return (
    <div>
      <div>{`value: ${city !== null ? `'${city}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        // value={value}
        value={city}
        classes={{
          option: classes.option,
        }}
        onChange={(event, newValue) => {
          setCity(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={cities.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select a city.." variant="outlined" />
        )}
      />
    </div>
  );
}
