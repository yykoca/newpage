import { React, useState, useEffect } from "react";
import data from "./city.list.json";
import CWA from "./API/CWA";
import Search from "./Components/Search";
import SearchCity from "./Components/SearchCity";
import WheatherCity from "./Components/WheatherCity";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [cityID, setCityID] = useState(2864475);
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    CWA.getWheatherByCityID(cityID).then((dataOfCity) =>
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
