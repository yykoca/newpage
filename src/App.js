import dotenv from "dotenv";
import { React, useState, useEffect } from "react";
import data from "./city.list.json";
import CWA from "./API/CWA";
// import Search from "./Components/Search";
import SearchCity from "./Components/SearchCity";
import WheatherCity from "./Components/WheatherCity";
import "./App.css";
dotenv.config();

function App() {
  const [city, setCity] = useState("Savsat");
  const [cityData, setCityData] = useState({});
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    CWA.getWheatherByCityID(city, process.env.REACT_APP_API_KEY).then(
      (dataOfCity) => setCityData(dataOfCity)
    );
  }, [city]);

  return (
    <div>
      <SearchCity
        data={data}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCity={setCity}
        cities={cities}
        setCities={setCities}
      />
      <WheatherCity cityData={cityData} />

      {/* <Search city={city} setCity={setCity} cities={cities} /> */}
    </div>
  );
}

export default App;
