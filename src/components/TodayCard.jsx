import { useEffect, useState } from "react";
import { emojis } from "../utils/emojis";
import { getEmojis } from "../utils/getEmojis";
import { formatDateToHoursMinutes } from "../utils/formatDateToHoursMinutes";

const TodayCard = ({ data, weatherUnits }) => {
  const [weatherEmojis, setWeatherEmojis] = useState("");
  
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

    setWeatherEmojis(weatherEmojis);
  }, [data]);

  if (!data || !weatherUnits) {
    return (<div>Aucune données. Affichage impossible...</div>);
  }
  return (
<div className="max-w-max xl:ml-auto mx-auto">
      <div className="flex mb-20 mt-12 flex-col xl:flex-row ">
        <div className="flex flex-col">
          <div className="text-8xl mb-8 text-center xl:text-right ">
            {weatherEmojis}
          </div>
          <div className="text-3xl font-bold text-center text-white mt-auto mb-8 xl:mt-auto xl:mb-0">
            Aujourd'hui, {data.day}
          </div>
        </div>
        <div className="text-xl ml-12 xl:pl-4 xl:border-l-2 xl:border-l-indigo-500">
          <p>
            {emojis.calendar} Jour : {data.day}
          </p>
          <p>
            {emojis.rain} Pluie : {data.precipitation_sum} {weatherUnits.rain}
          </p>
          <p>
            {emojis.sunrise} Lever du soleil :{" "}
            {formatDateToHoursMinutes(new Date(data.sunrise))}
          </p>
          <p>
            {emojis.sunset} Coucher du soleil :{" "}
            {formatDateToHoursMinutes(new Date(data.sunset))}
          </p>
          <p>
            {emojis.hot} Température Max : {data.temperature_2m_max}{" "}
            {weatherUnits.temperature}
          </p>
          <p>
            {emojis.cold} Température Min : {data.temperature_2m_min}{" "}
            {weatherUnits.temperature}
          </p>
          <p>
            {emojis.wind} Vent : {data.windspeed_10m_max} {weatherUnits.wind}
          </p>
        </div>
      </div>
    </div>
  )
};

export default TodayCard;
