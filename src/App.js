import { getDayOfYear, getDaysInYear } from "date-fns";
import React, { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  const currentDay = (date) => {
    return getDayOfYear(date);
  };
  const daysInYear = (date) => {
    return getDaysInYear(date);
  };
  const calculatePercentage = (dayofYear, totalDays) => {
    return (dayofYear * 100) / totalDays;
  };

  let currentDate = new Date();
  let dayofYear = currentDay(currentDate);
  let totalDays = daysInYear(currentDate);
  let percentage = calculatePercentage(dayofYear, totalDays);

  return (
    <div className="wrap">
      <div className="container">
        <ProgressBar value={percentage} max={100} />
        <h2>Progress of year {percentage}%</h2>{" "}
      </div>
    </div>
  );
}

export default App;
