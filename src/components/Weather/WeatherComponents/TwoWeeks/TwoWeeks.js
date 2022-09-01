import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import weatherApi from "../../../../api/weatherApi";
import Loader from "../../../Loader/Loader";
import Markup from "../../../Markup/Markup";

export default function TwoWeeks() {
  const [weather, setWeather] = useState();

  const city = useSelector((state) => state.cities.value);

  async function futureWeather() {
    const apiWeather = new weatherApi();
    const futureWeather = await apiWeather.getFutureWeather(
      city ? city : "Kamelnitskiy"
    );
    setWeather(futureWeather);
  }

  console.log(weather);

  useEffect(() => {
    futureWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <>
      {weather ? (
        weather.forecast.forecastday.map((day) => (
          <Markup key={day.date} forecast={day} location={weather.location} />
        ))
      ) : (
        <Loader />
      )}
    </>
  );
}
