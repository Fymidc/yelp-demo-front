import './App.css';
import Dashboard from './layouts/Dashboard';
import Nav from './layouts/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
