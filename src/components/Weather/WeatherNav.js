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
          Погода сьогодні
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
          to="three-days"
        >
          Погода на три дні
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
          to="two-weeks"
        >
          Погода на 14 днів
        </NavLink>
      </div>
    </div>
  );
}
