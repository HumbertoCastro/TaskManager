import React, { useContext, useEffect } from "react";
import TaskContext from "../context/TaksContext";
import DayColumn from "./DayColumn";
import ReturnMinutes from "../helpers/Minutes";

function Week() {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Trursday', 'Friday'];
  const {
    setVisible,
    setOuterHtml,
  } = useContext(TaskContext);
  useEffect(() => {
    if (localStorage.getItem('list')) {
      document.querySelector('main').outerHTML = localStorage.getItem('list');
      const buttons =document.querySelectorAll('.add-button');
      for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', function({ target }) {
          setVisible('');
          setOuterHtml(target.id);
        })
      }
      const lista = document.querySelectorAll('.task-card');
      for (let i = 0; i < lista.length; i += 1) {
        lista[i].onclick = function() {
          setVisible('');
          setOuterHtml(lista[i].id);
        };
      }
    }
  }, [])
  return (
    <main className="flex-column">
      <section className="flex-row">
        {
          week.map((day, index) => (
            <div className="flex-column day" key={ `${index}-${day}` }>
              <section className="flex-row">
                <span className="grey">{'<h1>'}</span>
                <h3 className="text weekdays">{day}</h3>
                <span className="grey">{'<h1>'}</span>
              </section>
              {
                <DayColumn week={ week[index] } ReturnMinutes={ ReturnMinutes } />
              }
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default Week;
