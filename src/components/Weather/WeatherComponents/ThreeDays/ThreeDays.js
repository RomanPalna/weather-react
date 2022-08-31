import { useState, useEffect } from "react";
import weatherApi from "../../../../api/weatherApi";

export default function ThreeDays() {
  const [forecast, setForecast] = useState();

  async function getForecast() {
    const city = "London";

    const apiWeather = new weatherApi();

    const forecast = await apiWeather.getForecastThreeDays(city);

    setForecast(forecast);
  }

  console.log(forecast);

  useEffect(() => {
    getForecast();
  }, []);

  return <div>Threee Days</div>;
}
