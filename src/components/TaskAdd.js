import React, { useContext, useState } from "react";
import TaskContext from "../context/TaksContext";


function TaskAdd() {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(1);
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');

  const renderTask = `<div class="task-card" ><h1>${title}</h1><p>${description}</p></div>`;
  const {
    setVisible,
    visible,
    outerHtml,
    setOuterHtml,
  } = useContext(TaskContext);
  const Tempos = ['00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00'];

  return (
      <div className={ `add-task flex-column ${ visible }` }>
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
          const object = outerHtml;
          object.parentElement.style.height = `${ 15 * duration }vh`;
          object.parentElement.style.backgroundColor = color;
          const pai = object.parentElement.parentElement;
          for (let i = 1; i < duration; i += 1) {
            pai.parentElement.removeChild(pai.nextElementSibling);
          }
          object.outerHTML = renderTask;
          setVisible('invisible');
          }}
        >
          Save Task
        </button>
      </div>
  )
}

export default TaskAdd;
