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

  const userid= localStorage.getItem("currenUser");

  useEffect(() => {
    dispatch(getAllCafes());
    dispatch(getOneUser(userid))
    
  }, [])

  const path = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0)  
  }, [path])


  return (
    <div className="App">
      
      <div>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
