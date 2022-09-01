import { NavLink } from "react-router-dom";
import SearchInput from "./WeatherComponents/SearchInput/SearchInput";
import styles from "./WeatherNav.module.css";

export default function Weather() {
  return (
    <div className={styles.weatherNav}>
      <SearchInput />
      <div className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
          to="today"
        >
          Weather now
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
          to="three-days"
        >
          Weather for 3 days
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
          to="two-weeks"
        >
          Weather for 2 weeks
        </NavLink>
      </div>
    </div>
  );
}
