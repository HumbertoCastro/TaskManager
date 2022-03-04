import React, { useContext } from "react";
import TaskContext from "../context/TaksContext";

function DayColumn( { week, ReturnMinutes }) {
  const {
    setTime,
    setOuterHtml,
    setVisible,
  } = useContext(TaskContext);
  const Tempos = ['00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00'];
  return (
    <div className="day-column flex-column" id={`${week}`} >
      {
        ReturnMinutes.map((x, index) => (
          <div className="flex-row container-task" key={ `${index}-${x}` }>
            <p className="tempo">{x}</p>
            <div className="board">
              <button
                type="button"
                className="text add-button"
                id={ `${index}-${week}` }
                onClick={({ target }) => {
                  console.log(target.id);
                  setVisible('');
                  setOuterHtml(target.id);
                } }
              >
                ENTER YOUR TASK
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DayColumn;
