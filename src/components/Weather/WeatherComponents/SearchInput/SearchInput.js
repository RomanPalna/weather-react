import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Search.module.css";
import { getValue } from "../../../../redux/city-action";

export default function SearchInput() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getValue(search));
  }, [dispatch, search]);

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <form className={styles.search}>
      <input
        placeholder="Виберіть місто"
        className={styles.input}
        type="text"
        value={search}
        name="search"
        onChange={handleChange}
      />
    </form>
  );
}
