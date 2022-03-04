import React, { useContext, useState } from "react";
import { useEffect } from "react";
import TaskContext from "../context/TaksContext";
import ReturnMinutes from "../helpers/Minutes";


function TaskAdd() {
  const {
    setVisible,
    visible,
    outerHtml,
    setOuterHtml,
  } = useContext(TaskContext);

  useEffect(() => {
    console.log('pagina iniciada');
    addEventos();
  }, [])
  const [title, setTitle] = useState('title of the task');
  const [duration, setDuration] = useState(1);
  const [description, setDescription] = useState('Description of the task');
  const [color, setColor] = useState('#ee9b00');

  const deleteTaskFromList = (element, value) => {
    const week = element.split('-')[1];
    const pos = element.split('-')[0];
    const time = value.split(' ')[1];
    const local = ReturnMinutes.indexOf(time);

    const tamanh = value.split(' ')[0];
    let cardzinho = (`<div class="flex-row container-task" key="${pos}-${week}" }>
        <p class="tempo">${time}</p>
        <div class="board">
          <button
            type="button"
            class="text add-button"
            id="${pos}-${week}"
          >
            ENTER YOUR TASK
          </button>
        </div>
      </div>`);
    for (let i = 1; i < tamanh; i += 1) {
      const newValue = (`<div class="flex-row container-task" key="${pos}-${week}" }>
      <p class="tempo">${ReturnMinutes[local + i]}</p>
      <div class="board">
        <button
          type="button"
          class="text add-button"
          id="${pos+i}-${week}"
        >
          ENTER YOUR TASK
        </button>
      </div>
    </div>`);
    cardzinho += newValue;
    }
    const obj = document.getElementById(`${element}`);
    obj.parentElement.parentElement.outerHTML = cardzinho;
    resetEventos();
    const mainSection = document.querySelector('main');
    localStorage.setItem('list', mainSection.outerHTML);
  }

  const resetEventos = () => {
    const buttons =document.querySelectorAll('.add-button');
    console.log(buttons);
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('click', function({ target }) {
        console.log(target.id);
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

  const addEventos = () => {
    const lista = document.querySelectorAll('.task-card');
    const deletebtn = document.querySelectorAll('.delete-btn');
    for (let i = 0; i < deletebtn.length; i += 1) {
      deletebtn[i].addEventListener('click', function() {
        deleteTaskFromList(deletebtn[i].classList[1], deletebtn[i].value);
      });
    }
    for (let i = 0; i < lista.length; i += 1) {
      lista[i].onclick = function() {
        setVisible('');
        setOuterHtml(lista[i].id);
      };
    }
  }

  const renderTask = () => {
    let object = document.getElementById(`${outerHtml}`).parentElement.previousSibling;
    console.log(object.previousSibling);
    if (object.previousSibling !== null) {
      object = object.previousSibling;
    }
    
    return (`<button
      class="task-card"
      id="${outerHtml}"
    >
      <h1 class="${outerHtml}">${title}</h1>
      <p class="description ${outerHtml}">${description}</p>
      <button type="button" class="delete-btn ${outerHtml}" value="${duration} ${object.innerHTML}" >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-file-x-fill" viewBox="0 0 16 16">
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z"/>
        </svg>
      </button>
    </button>`)
  }

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
        <img href="../../file-x-fill.svg" alt="delete" />
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
              <option value={ index + 1 } key={ `${index}-${x}` }>{ x }</option>
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
          object.outerHTML = renderTask();
          object = document.getElementById(`${outerHtml}`);
          if (object.nextElementSibling.nextElementSibling !== null) {
            object.parentElement.removeChild(object.nextElementSibling.nextElementSibling);
          }
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
