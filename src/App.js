import './App.css';
import Header from './components/Header';
import Week from './components/Week';
import Provider from './context/Provider';
import TaskAdd from './components/TaskAdd';

function App() {
  return (
    <Provider>
      <div className="App flex-column">
        <Header />
        <Week />
        <TaskAdd />
      </div>
    </Provider>
  );
}

export default App;
