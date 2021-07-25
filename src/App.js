import { React, useState, useEffect } from "react";
import data from "./city.list.json";
import CWA from "./API/CWA";
import Search from "./Components/Search";
import SearchCity from "./Components/SearchCity";
import WheatherCity from "./Components/WheatherCity";
import "./App.css";
// import dotenv from 'dotenv';
// dotenv.config()

function App() {
  const [city, setCity] = useState("");
  const [cityID, setCityID] = useState(2864475);
  const [cityData, setCityData] = useState({});
  console.log("abs", process.env);

  useEffect(() => {
    CWA.getWheatherByCityID(cityID, "7acb6899f20cac69098920ef1aeb6365").then((dataOfCity) =>
    // CWA.getWheatherByCityID(cityID, process.env.API_KEY).then((dataOfCity) =>
      setCityData(dataOfCity)
    );
  }, [cityID]);

  return (
    <div>
      <Search/>
      <WheatherCity cityData={cityData} />
      <SearchCity
        data={data}
        city={city}
        setCity={setCity}
        setCityID={setCityID}
      />
      
    </div>
  );
}

export default App;
