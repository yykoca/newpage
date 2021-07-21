function makeCityWheatherDetails(cityData) {
  console.log(cityData);
  return {
    id: cityData.id,
    name: cityData.name,
    lon: cityData['coord'].lon,
    lat: cityData['coord'].lat,
  };
}

async function getWheatherByCityID(cityID) {
  const apiKey = "7acb6899f20cac69098920ef1aeb6365";
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`;

  return await fetch(url)
    .then((response) => response.json())
    .then((data) => makeCityWheatherDetails(data));
}

const CWA = {getWheatherByCityID};
export default CWA;