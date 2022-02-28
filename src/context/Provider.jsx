import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaksContext';

function Provider({ children }) {
  const [visible, setVisible] = useState('invisible');
  const [time, setTime] = useState('');
  const [outerHtml, setOuterHtml] = useState('');

  const contextValue = {
    time,
    setTime,
    setVisible,
    visible,
    outerHtml,
    setOuterHtml,
  };

  return (
    <TaskContext.Provider value={ contextValue }>
      {children}
    </TaskContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
