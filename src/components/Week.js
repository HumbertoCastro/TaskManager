import React from "react";
import DayColumn from "./DayColumn";

function Week() {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Trursday', 'Friday'];
  return (
    <main className="flex-column">
      <section className="flex-row">
        {
          week.map((day) => (
            <div className="flex-column day">
              <section className="flex-row">
                <span className="grey">{'<h1>'}</span>
                <h3 className="text weekdays">{day}</h3>
                <span className="grey">{'<h1>'}</span>
              </section>
              {
                <DayColumn />
              }
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default Week;
