import React, { useState } from 'react'
import SearchBar from '../layouts/SearchBar'
import MyButton from '../layouts/MyButton'
import { useDispatch } from 'react-redux';
import { getCafeNameContains } from '../actions/cafeActions';
import { useNavigate } from 'react-router';

function LandingPage() {

    const [input, setinput] = useState("")
 
  const navigate= useNavigate();
    const dispatch = useDispatch();


    const inputHandler=(e)=>{
       setinput(e.target.value)
    }

    

    const handleClick=()=>{
      submitHandler();
    }

    const submitHandler=()=>{
    const capitalisedInput= input.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())
     dispatch(getCafeNameContains(capitalisedInput))
     navigate("/shops")
    }
    const padding="3rem"

    return (
        <div className="landing-page" >
            <div className="dashboardimg" ></div>
            <LandingHeader/>

            <div className="search-bar" >
                 <SearchBar inputhandler={inputHandler}
                  submithandler={submitHandler}
                  handleclick={handleClick}
                   />

                <MyButton submit={handleClick} padding={padding} />
            </div>
           

        </div>
    )
}


function LandingHeader(){
    return(
        <div className="landing-header-texts" >
            <h1>My <b>Coffee</b> Place</h1>

            <div>
                <h3>Hi Fatih</h3>
                <h3>Have you had coffee?</h3> 
            </div>
            
        </div>
    )
}

export default LandingPage
