import React, { useContext, useState } from "react";
import TaskContext from "../context/TaksContext";
import ReturnMinutes from "../helpers/Minutes";

function DayColumn() {
  const {
    setTime,
    setOuterHtml,
    setVisible,
  } = useContext(TaskContext);
  const Tempos = ['00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00'];
  
  return (
    <div className="day-column flex-column">
      {
        ReturnMinutes.map((x) => (
          <div className="flex-row container-task">
            <p className="tempo">{x}</p>
            <div className="board">
              <button
                type="button"
                className="text add-button"
                onClick={({ target }) => {
                  setVisible('');
                  setOuterHtml(target);
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
