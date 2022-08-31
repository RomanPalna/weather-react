import { useState, useEffect } from "react";
import weatherApi from "../../../../api/weatherApi";

export default function Today() {
  const [weatherToday, setWeatherToday] = useState();

  async function getWeatherToday() {
    const city = "London";

    const getWeatherToday = new weatherApi();

    const weather = await getWeatherToday.getWetherToday(city);
    setWeatherToday(weather);
  }

  useEffect(() => {
    getWeatherToday();
  }, []);

  console.log(weatherToday);

  return <div>Today</div>;
}
