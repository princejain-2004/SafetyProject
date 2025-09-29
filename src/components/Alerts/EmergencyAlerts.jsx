import React, { useState, useEffect } from "react";
import { Search, CloudRain, Sun, Cloud, AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function NotificationPage() {
  const [city, setCity] = useState("Delhi");
  const [forecast, setForecast] = useState([]);
  const [today, setToday] = useState(null);

  const [drills, setDrills] = useState({
    upcoming: [
      { id: 1, title: "Earthquake Drill", date: "2025-10-05", time: "10:00 AM" },
      { id: 2, title: "Fire Evacuation Drill", date: "2025-10-12", time: "11:30 AM" },
    ],
    completed: [
      { id: 3, title: "Flood Safety Drill", date: "2025-09-20", feedback: "Students responded quickly and safely." },
      { id: 4, title: "Tornado Shelter Drill", date: "2025-09-10", feedback: "Minor confusion in assembly area." },
    ],
  });

  const API_KEY = "0f7963ca0e28bf45003486939df65bba";

  const fetchWeather = async (cityName) => {
    try {
      // Current weather
      const todayRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const todayData = await todayRes.json();
      if (todayData.cod !== 200) {
        alert(todayData.message);
        return;
      }
      setToday(todayData);

      // Forecast (pick midday entries for next 4 days)
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();

      const daily = {};
      forecastData.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!daily[date] && item.dt_txt.includes("12:00:00")) {
          daily[date] = item;
        }
      });

      setForecast(Object.values(daily).slice(0, 4));
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const getWeatherIcon = (main) => {
    main = main.toLowerCase();
    if (main.includes("rain")) return <CloudRain className="w-6 h-6 text-blue-600" />;
    if (main.includes("cloud")) return <Cloud className="w-6 h-6 text-gray-600" />;
    return <Sun className="w-6 h-6 text-yellow-500" />;
  };

  const getAlertMessage = (desc) => {
    desc = desc.toLowerCase();
    if (desc.includes("rain")) return "⚠️ Heavy Rain Expected – Carry Umbrella";
    if (desc.includes("storm")) return "⚡ Severe Storm Warning – Stay Indoors";
    if (desc.includes("snow")) return "❄️ Snowfall Alert – Drive Carefully";
    if (desc.includes("heat")) return "🔥 Heatwave Alert – Stay Hydrated";
    if (desc.includes("fog")) return "🌫️ Low Visibility due to Fog";
    return null;
  };

  useEffect(() => {
    fetchWeather(city); // auto-fetch on load
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Search */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button
          onClick={() => fetchWeather(city)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Search className="w-4 h-4" /> Search
        </button>
      </div>

      {/* Today */}
      {today && (
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-lg font-semibold">Today in {today.name}</h2>
          {getWeatherIcon(today.weather[0].main)}
          <p className="text-gray-600">{today.weather[0].description}</p>
          <p className="text-xl font-bold">{Math.round(today.main.temp)}°C</p>
          {getAlertMessage(today.weather[0].description) && (
            <div className="mt-3 flex items-center justify-center gap-2 bg-red-50 border-l-4 border-red-600 p-2 rounded">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <p className="text-sm text-red-700">{getAlertMessage(today.weather[0].description)}</p>
            </div>
          )}
        </div>
      )}

      {/* Forecast */}
      {forecast.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-3">Next 4 Days</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {forecast.map((item, i) => {
              const date = new Date(item.dt_txt);
              const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
              return (
                <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
                  <p className="font-medium">{dayName}</p>
                  {getWeatherIcon(item.weather[0].main)}
                  <p className="text-sm text-gray-600">{item.weather[0].description}</p>
                  <p className="font-semibold">{Math.round(item.main.temp)}°C</p>
                  {getAlertMessage(item.weather[0].description) && (
                    <div className="mt-2 flex items-center justify-center gap-2 bg-red-50 border-l-4 border-red-600 p-2 rounded">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      <p className="text-xs text-red-700">{getAlertMessage(item.weather[0].description)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Virtual Drills Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Virtual Drills</h2>

        {/* Upcoming Drills */}
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-blue-800 mb-2">Upcoming Drills</h3>
          <ul className="space-y-2">
            {drills.upcoming.map((drill) => (
              <li key={drill.id} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                <div>
                  <p className="font-medium">{drill.title}</p>
                  <p className="text-sm text-gray-600">{drill.date} — {drill.time}</p>
                </div>
                <Clock className="w-5 h-5 text-blue-500" />
              </li>
            ))}
          </ul>
        </div>

        {/* Completed Drills */}
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-green-800 mb-2">Completed Drills</h3>
          <ul className="space-y-2">
            {drills.completed.map((drill) => (
              <li key={drill.id} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                <div>
                  <p className="font-medium">{drill.title}</p>
                  <p className="text-sm text-gray-600">{drill.date}</p>
                  <p className="text-xs text-gray-500 italic">Feedback: {drill.feedback}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
