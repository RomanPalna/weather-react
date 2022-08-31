import { useState } from "react";
import styles from "./Search.module.css";

export default function SearchInput() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className={styles.search}>
      <input
        placeholder="Виберіть місто"
        className={styles.input}
        type="text"
        value={search}
        name="search"
        onChange={handleChange}
      />
    </div>
  );
}
