import { useEffect, useState } from "react";
import Temperature from "./Components/Temperature";
import Highlight from "./Components/Highlight";

function App() {
  const [city, setCity] = useState("Mumbai");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=fba042cead2941ae8b8163347240909&q=${city}&aqi=no`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could Not Get Data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <>
      <div
        className="bg-[#1f213A] md:h-screen flex justify-center items-start  sm:flex flex-col md:flex-row">
        <div className="leftContainer sm: mt-16 md:mt-16 sm: ml-7 md:ml-7 lg:mt-40 lg:ml-0 lg:w-1/5 lg:h-1/3  sm:justify-center items-center   data-aos='zoom-out' data-aos-duration='1000' ">
          {weatherData && (
            <Temperature
              setCity={setCity}
              stats={{
                temp: weatherData.current.temp_c,
                condition: weatherData.current.condition.text,
                isDay: weatherData.current.is_day,
                location: weatherData.location.name,
                time: weatherData.location.local_time,
              }}
            />
          )}
        </div>
        <div className="rightContainer lg:mt-32  md:mt-28  w-1/3 h-1/3 p-10 grid grid-col-2 gap-6">
          <h1 className="heading_div text-slate-200 text-3xl mb-2 font-bold col-span-2">
            Today&apos;s Highlights.
          </h1>
          {weatherData && (
            <>
              <Highlight
                stats={{
                  title: "Wind Status",
                  value: weatherData.current.wind_mph,
                  unit: "mph",
                  direction: weatherData.current.wind_dir,
                }}
              />

              <Highlight
                stats={{
                  title: "Humidity",
                  value: weatherData.current.humidity,
                  unit: "%",
                }}
              />

              <Highlight
                stats={{
                  title: "Visibility",
                  value: weatherData.current.vis_miles,
                  unit: "miles",
                }}
              />

              <Highlight
                stats={{
                  title: "Air Pressure",
                  value: weatherData.current.pressure_mb,
                  unit: "mb",
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar