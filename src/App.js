import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ThreeDays from "./components/Weather/WeatherComponents/ThreeDays/ThreeDays";
import Today from "./components/Weather/WeatherComponents/Today/Today";
import TwoWeeks from "./components/Weather/WeatherComponents/TwoWeeks/TwoWeeks";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="today" element={<Today />} />
      <Route path="three-days" element={<ThreeDays />} />
      <Route path="two-weeks" element={<TwoWeeks />} />
    </Routes>
  );
}

export default App;
