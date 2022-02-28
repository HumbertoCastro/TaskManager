import React, { useContext, useState } from "react";
import TaskContext from "../context/TaksContext";


function TaskAdd() {
  const [title, setTitle] = useState('title of the task');
  const [duration, setDuration] = useState(1);
  const [description, setDescription] = useState('Description of the task');
  const [color, setColor] = useState('#ee9b00');

  const {
    setVisible,
    visible,
    outerHtml,
    setOuterHtml
  } = useContext(TaskContext);

  const addEventos = () => {
    const lista = document.querySelectorAll('.task-card');
    for (let i = 0; i < lista.length; i += 1) {
      lista[i].onclick = function() {
        setVisible('');
        setOuterHtml(lista[i].id);
      };
    }
  }

  const renderTask =(
    `<button
      class="task-card"
      id="${outerHtml}"
    >
      <h1 class="${outerHtml}">${title}</h1>
      <p class="description ${outerHtml}">${description}</p>
    </button>`)
  const Tempos = ['00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00'];

  return (
      <div id="id" className={ `add-task flex-column ${ visible }` }>
        <button
          type="button"
          onClick={ ({ target }) => {
            setVisible('invisible');
          } }
        >
          x
        </button>
        <div className="flex-row">
          <span className="grey">{'<h1>'}</span><h1 className="text">Define your Task</h1><span className="grey">{'<h1>'}</span>
        </div>
        <h1>Task name</h1>
      <input type="text" onChange={({ target: { value } }) => {
        setTitle(value);
        }} />
        <div>
          <input type="color"  onChange={({ target: { value } }) => {
        setColor(value);
        }} />
          <span className="grey"> Define the task color</span>
        </div>
      <select onChange={({ target: { value } }) => {
        setDuration(value);
        } }>
          <option>How long will it last</option>
          {
            Tempos.map((x, index) => (
              <option value={ index + 1 }>{ x }</option>
            ))
          }
        </select>
      <textarea placeholder="Task description" maxLength="700" onChange={ ({ target: { value } }) => { 
        setDescription(value);
         } } ></textarea>
        <button
          type="button"
        onClick={() => {
          let object = document.getElementById(`${outerHtml}`);
          object.parentElement.style.height = `${ 15 * duration }vh`;
          object.parentElement.style.backgroundColor = color;
          const pai = object.parentElement.parentElement;
          for (let i = 1; i < duration; i += 1) {
            pai.parentElement.removeChild(pai.nextElementSibling);
          }
          object.outerHTML = renderTask;
          addEventos();
          setVisible('invisible');
          const mainSection = document.querySelector('main');
          localStorage.setItem('list', mainSection.outerHTML);
          }}
        >
          Save Task
        </button>
      </div>
  )
}

export default TaskAdd;
