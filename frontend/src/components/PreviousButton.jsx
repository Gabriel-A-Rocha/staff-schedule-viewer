import { WEEKDAYS } from "../utils/weekdays";

export function PreviousButton({ weekday, updateWeekday }) {
  function handleClick() {
    const previousIndex = WEEKDAYS.findIndex((day) => day === weekday) - 1;
    updateWeekday(WEEKDAYS[previousIndex]);
  }

  return (
    <button onClick={() => handleClick()} disabled={weekday === "monday"}>
      Previous
    </button>
  );
}
