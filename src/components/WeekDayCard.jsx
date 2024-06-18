import { useEffect, useState } from "react";
import { getEmojis } from "../utils/getEmojis";

const WeekDayCard = ({ data, weatherUnits }) => {
  const [weatherEmojis, setWeatherEmojis] = useState("");
  const [averageTemperature, setAverageTemperature] = useState(0);

  useEffect(() => {
    if (!data) return;

    const avTemp = (
      (data.temperature_2m_max + data.temperature_2m_min) /
      2
    ).toFixed(1);

    const weatherEmojis = getEmojis(
      avTemp,
      data.precipitation_sum,
      data.windspeed_10m_max
    );

    setAverageTemperature(avTemp);
    setWeatherEmojis(weatherEmojis);
  }, [data]);

if(!data || !weatherUnits) {
  return <div>Erreur...</div>
}

  return (
    <div className="text-center p-6 rounded-md bg-white/30 shadow-md flex justify-center items-center md:flex-col">
    <p className="text-lg font-bold md:mb-1">{data.day}</p>
    <p className="ml-6 md:mb-4 md:ml-0">
      {averageTemperature}{" "}
      <span className="text-xs font-semibold">
        {weatherUnits.temperature}
      </span>
    </p>
    <div className="ml-6 text-4xl md:ml-0">
      {weatherEmojis && <div>{weatherEmojis}</div>}
    </div>
  </div>
  )
};

export default WeekDayCard;
