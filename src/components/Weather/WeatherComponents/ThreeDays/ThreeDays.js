import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import weatherApi from "../../../../api/weatherApi";
import Markup from "../../../Markup/Markup";

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

  useEffect(() => {
    getForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <>
      {forecast ? (
        forecast.forecast.forecastday.map((day) => (
          <Markup key={day.date} forecast={day} location={forecast.location} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
