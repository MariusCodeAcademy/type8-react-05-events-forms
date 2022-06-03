import './App.css';
import Counter from './components/Counter/Counter';
import CounterList from './components/Counter/CounterList';
import Login from './components/Form/Login';

function App() {
  return (
    <div className='App'>
      <h1>Heloo again world</h1>
      {/* TODO: add multile conters with titles */}
      <CounterList />
      {/* <Counter />
      <Counter />
      <Counter /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
