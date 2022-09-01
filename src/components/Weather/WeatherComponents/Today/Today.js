import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import weatherApi from "../../../../api/weatherApi";

export default function Today() {
  const [weatherToday, setWeatherToday] = useState();

  const city = useSelector((state) => state.cities.value);

  async function getWeatherToday() {
    const getWeatherToday = new weatherApi();

    const weather = await getWeatherToday.getWetherToday(city);
    setWeatherToday(weather);
  }

  useEffect(() => {
    getWeatherToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  console.log(weatherToday);

  return <div>Today</div>;
}
