import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NameList } from "../components/NameList";
import { NextButton } from "../components/NextButton";
import { PreviousButton } from "../components/PreviousButton";
import "../styles.css";
import { capitalize } from "../utils/capitalize";

export function Waiters() {
  const [schedule, setSchedule] = useState(null);
  const [weekday, setWeekday] = useState(() => {
    const localValue = localStorage.getItem("weekday");
    if (!localValue) return "monday";
    return localValue;
  });
  const [error, setError] = useState("");

  useEffect(() => {
    getSchedule();
  }, []);

  async function getSchedule() {
    try {
      const response = await axios.get("http://localhost:3000/GetWaiters");
      setSchedule(response.data);
    } catch (err) {
      setError(err.message);
    }
  }

  function updateWeekday(day) {
    setWeekday(day);
    window.localStorage.setItem("weekday", day);
  }

  if (error) {
    return <p>Failed to load schedule from the server.</p>;
  }

  if (!schedule) {
    return <p>Loading schedule from the server...</p>;
  }

  return (
    <>
      <h1>Waiters</h1>
      <h2>{capitalize(weekday)}</h2>
      <PreviousButton weekday={weekday} updateWeekday={updateWeekday}></PreviousButton>
      <NextButton weekday={weekday} updateWeekday={updateWeekday}></NextButton>
      <NameList names={schedule[weekday]}></NameList>
      <button>
        <Link className="link" to="/Cooks">
          Cooks
        </Link>
      </button>
    </>
  );
}
