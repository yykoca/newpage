function makeCityWheatherDetails(cityData) {
  return {
    id: cityData.id,
    name: cityData.name,
    weather: cityData.weather[0].main,
    icon: cityData.weather[0].icon,
    description: cityData.weather[0].description,
    temp: Math.floor(cityData.main.temp - 273.15),
    temp_max: Math.floor(cityData.main.temp_max - 273.15),
    temp_min: Math.floor(cityData.main.temp_min - 273.15),
    lon: cityData["coord"].lon,
    lat: cityData["coord"].lat,
    humidity: cityData.main.humidity,
    pressure: cityData.main.pressure,
    sunrise: convertDate(cityData.sys.sunrise),
    sunset: convertDate(cityData.sys.sunset),
    windDeg: cityData.wind.deg,
    windSpeed: cityData.wind.speed,
  };
}

async function getWheatherByCityID(city, apiKey) {
  // const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => makeCityWheatherDetails(data));
}

function convertDate(currentTimestamp) {
  let date = new Date(currentTimestamp * 1000).toLocaleTimeString();
  return date;
}

const CWA = { getWheatherByCityID };
export default CWA;
