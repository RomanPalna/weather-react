import styles from "./markup.module.css";

export default function Markup({ forecast, location }) {
  console.log(forecast);

  const { name, region, country } = location;

  return (
    <div className={styles.today}>
      <p className={styles.updated}>Date: {forecast.date}</p>

      <ul className={styles.cityInfo}>
        <li>City: {name}</li>
        <li>Region: {region}</li>
        <li>Country: {country}</li>
      </ul>

      <div>
        <img
          className={styles.img}
          src={forecast.day.condition.icon}
          alt="icon"
        />
        <ul className={styles.cityInfo}>
          <li>Condition: {forecast.day.condition.text}</li>
          <li>Temperature max: {forecast.day.maxtemp_c}°C</li>
          <li>Temperature min: {forecast.day.mintemp_c}°C</li>
          <li>Wind max: {forecast.day.maxwind_kph} m/h</li>
        </ul>
      </div>
    </div>
  );
}
