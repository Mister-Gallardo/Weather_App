const GetCity = async (value: string) => {
  try {
    const resp = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=10&appid=4c3b58702b6ef99f881a7482af0ca8aa`
    );
    const json = resp.json();
  
    console.log(json)
    return json;
  }
  catch(error) {
    console.log('Ошибка:', error)
  }
};

export default GetCity;