const GetWeather = async () => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=55.7504461&lon=37.6174943&appid=d1d53c2ea49cd699b3b6ecc20c1b8152`
      );
      const json = resp.json();
    
      console.log(json)
      return json;
    }
    catch(error) {
      console.log('Ошибка:', error)
    }
  };
  
  export default GetWeather;