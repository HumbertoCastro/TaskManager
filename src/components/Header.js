import React from 'react';

function Header () {
  let data = new Date();
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Trursday', 'Friday'];
  const dd = String(data.getDate()).padStart(2, '0');
  const mm = String(data.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = data.getFullYear();
  const today = dd + '/' + mm + '/' + yyyy;
  let dayName = '';
  if (data.getDay() > 5 ) {
    dayName = 'Weekend';
  } else {
    dayName = week[data.getDay() -1 ];
  }
  return (
    <header className="center flex-column">
      <div className="flex-row">
        <span className="grey">{'<h1>'}</span><h1 className="text">NOME DO APP</h1><span className="grey">{'<h1>'}</span>
      </div>
      <div className="flex-row">
        <span className="grey">{'<h1>'}</span><h1 className="text">{ dayName }</h1><span className="grey">{'<h1>'}</span>
      </div>
      <h2 className="grey">{today}</h2>
    </header>
  )
}

export default Header;