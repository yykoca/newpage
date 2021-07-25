function makeCityWheatherDetails(cityData) {
  console.log(cityData);
  return {
    id: cityData.id,
    name: cityData.name,
    weather: cityData.weather[0].main,
    temp: Math.floor((cityData.main.temp - 273.15)),
    temp_max: Math.floor((cityData.main.temp_max - 273.15)),
    temp_min: Math.floor((cityData.main.temp_min - 273.15)),
    lon: cityData['coord'].lon,
    lat: cityData['coord'].lat,
  };
}

async function getWheatherByCityID(cityID, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`;

  return await fetch(url)
    .then((response) => response.json())
    .then((data) => makeCityWheatherDetails(data));
}

const CWA = {getWheatherByCityID};
export default CWA;