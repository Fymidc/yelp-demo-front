import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCafes } from './actions/cafeActions';
import { getOneUser } from './actions/userActions';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Nav from './layouts/Nav';

function App() {

  const state = useSelector(state => state.cafe)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCafes());
    dispatch(getOneUser())
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
