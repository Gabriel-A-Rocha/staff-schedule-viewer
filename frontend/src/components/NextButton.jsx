import { WEEKDAYS } from "../utils/weekdays";

export function NextButton({ weekday, updateWeekday }) {
  function handleClick() {
    const nextIndex = WEEKDAYS.findIndex((day) => day === weekday) + 1;
    updateWeekday(WEEKDAYS[nextIndex]);
  }

  return (
    <button onClick={() => handleClick()} disabled={weekday === "friday"}>
      Next
    </button>
  );
}
