import { useState } from "react";
import "./styles.css";

const InsertHours = () => {
  const [startHour, setStartHour] = useState();
  const [endHour, setEndHour] = useState();

  const handleHours = (event) => {
    event.preventDefault();
    alert("test");
  };

  return (
    <form onSubmit={handleHours}>
      <div id="backgroundBoxHours">
        <div id="divBeginHour">
          <label name="inputStartHours" id="labelBeginHours">
            Begin hour:
          </label>
          <input
            type="datetime"
            name="inputStartHours"
            id="inputStartHours"
            value={startHour}
            onChange={(e) => {
              setStartHour(e.target.value);
            }}
          />
        </div>
        <div id="divEndHour">
          <label name="inputEndHours" id="labelEndHours">
            Closing time:
          </label>
          <input
            type="datetime"
            name="inputEndHours"
            id="inputEndHours"
            value={endHour}
            onChange={(e) => {
              setEndHour(e.target.value);
            }}
          />
        </div>
        <button type="submit" id="btnConfirmHours">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default InsertHours;
