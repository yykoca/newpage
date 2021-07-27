// import dotenv from "dotenv";
import { React, useState, useEffect } from "react";
import data from "./city.list.json";
import CWA from "./API/CWA";
// import Search from "./Components/Search";
import SearchCity from "./Components/SearchCity";
import WheatherCity from "./Components/WheatherCity";
import "./App.css";
// dotenv.config();

function App() {
  const [cityID, setCityID] = useState(2864475);
  const [cityData, setCityData] = useState({});
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);

  useEffect(() => {
    // CWA.getWheatherByCityID(cityID, process.env.API_KEY).then((dataOfCity) =>
    CWA.getWheatherByCityID(cityID, "7acb6899f20cac69098920ef1aeb6365").then(
      (dataOfCity) => setCityData(dataOfCity)
    );
  }, [cityID]);

  return (
    <div>
      <SearchCity
        data={data}
        city={city}
        setCity={setCity}
        setCityID={setCityID}
        cities={cities}
        setCities={setCities}
      />
      <WheatherCity cityData={cityData} />

      {/* <Search city={city} setCity={setCity} cities={cities} /> */}
    </div>
  );
}

export default App;
