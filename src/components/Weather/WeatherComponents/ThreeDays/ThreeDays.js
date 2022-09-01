import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import weatherApi from "../../../../api/weatherApi";

export default function ThreeDays() {
  const [forecast, setForecast] = useState();

  const city = useSelector((state) => state.cities.value);

  async function getForecast() {
    const apiWeather = new weatherApi();

    const forecast = await apiWeather.getForecastThreeDays(
      city ? city : "Kamelnitskiy"
    );

    setForecast(forecast);
  }

  console.log(forecast);

  useEffect(() => {
    getForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return <div>Threee Days</div>;
}
