import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import weatherApi from "../../../../api/weatherApi";
import styles from "./today.module.css";

export default function Today() {
  const [weatherToday, setWeatherToday] = useState();

  const city = useSelector((state) => state.cities.value);

  async function getWeatherToday() {
    const getWeatherToday = new weatherApi();

    const weather = await getWeatherToday.getWetherToday(
      city ? city : "Kamelnitskiy"
    );
    setWeatherToday(weather);
  }

  useEffect(() => {
    getWeatherToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  console.log(weatherToday ? weatherToday : "Error");
  return (
    <>
      {weatherToday ? (
        <div className={styles.today}>
          <p className={styles.updated}>
            Updated: {weatherToday.current.last_updated}
          </p>

          <ul className={styles.cityInfo}>
            <li>City: {weatherToday.location.name}</li>
            <li>Region: {weatherToday.location.region}</li>
            <li>Country: {weatherToday.location.country}</li>
          </ul>

          <div>
            <img src={weatherToday.current.condition.icon} alt="icon" />
            <ul className={styles.cityInfo}>
              <li>Condition: {weatherToday.current.condition.text}</li>
              <li>Tmperature: {weatherToday.current.temp_c}°C</li>
              <li>Wind: {weatherToday.current.wind_kph} m/h</li>
            </ul>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
