import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCafes } from './actions/cafeActions';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Nav from './layouts/Nav';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCafes());
  }, [])

  return (
    <div className="App">
      
      <div>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
