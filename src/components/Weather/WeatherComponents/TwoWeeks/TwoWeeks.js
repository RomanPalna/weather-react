import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import weatherApi from "../../../../api/weatherApi";

export default function TwoWeeks() {
  const [weather, setWeather] = useState();

  const city = useSelector((state) => state.cities.value);

  async function futureWeather() {
    // const date = addDaysToCurrentDate(14); //yyyy-MM-dd

    const apiWeather = new weatherApi();
    const futureWeather = await apiWeather.getFutureWeather(city);
    setWeather(futureWeather);
  }

  console.log(weather);

  useEffect(() => {
    futureWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return <div>Two Weeks</div>;
}
