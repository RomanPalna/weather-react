import { useState, useEffect } from "react";
import weatherApi from "../../../../api/weatherApi";
import addDaysToCurrentDate from "./timeChanger";

export default function TwoWeeks() {
  const [weather, setWeather] = useState();

  const twoWeeksDate = addDaysToCurrentDate(14);

  async function futureWeather() {
    const city = "London";
    const date = twoWeeksDate; //yyyy-MM-dd

    const apiWeather = new weatherApi();
    const futureWeather = await apiWeather.getFutureWeather(city, date);
    setWeather(futureWeather);
  }

  console.log(weather);

  useEffect(() => {
    futureWeather();
  }, []);

  return <div>Two Weeks</div>;
}
