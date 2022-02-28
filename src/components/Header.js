import React from 'react';

function Header () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  return (
    <header className="center flex-column">
      <div className="flex-row">
        <span className="grey">{'<h1>'}</span><h1 className="text">NOME DO APP</h1><span className="grey">{'<h1>'}</span>
      </div>
      <h2 className="grey">{today}</h2>
    </header>
  )
}

export default Header;