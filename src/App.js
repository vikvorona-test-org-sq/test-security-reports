import logo from './logo.svg';
import Test from './Test';
import TestLol from './TestLol';
import './App.css';

function App() {
  const test = 123;
  return (
    <div className="App">
      <header className="App-header">
      <Test a={1} b={2}/>
      <TestLol a={3} b={4}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to {test}. Test 2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>TEST</div>
      </header>
    </div>
  );
}

export default App;
