import React, { useState } from 'react'

import MyButton from '../layouts/MyButton'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch } from 'react-redux';
import { getCafeNameContains } from '../actions/cafeActions';
import { useNavigate } from 'react-router';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import Nav from '../layouts/Nav';

function LandingPage() {

    const [input, setinput] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const inputHandler = (e) => {
        setinput(e.target.value)
    }



    console.log("input", input)

    const handleClick = () => {
        submitHandler();
    }

    const submitHandler = (ev) => {

        
        const capitalisedInput = input.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())
        dispatch(getCafeNameContains(capitalisedInput))
        console.log("deneme: ", capitalisedInput)
       // ev.preventDefault();
        navigate("/shops")

    }
    const padding = "3rem"

    return (
        <div className="landing-page" >
            <Nav/>
            <div className="dashboardimg" ></div>
            <LandingHeader />

            <div className="search-bar" >
                <Stack className="search-stack" spacing={2} >


                    <TextField
                        color="warning"
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                submitHandler(ev);
                                ev.preventDefault();
                            }
                        }}
                        onChange={(e) => inputHandler(e)}
                        label="Find coffee place"
                        InputProps={{
                            type: 'search',
                            style: { color: 'black', backgroundColor: 'white', borderColor: 'black' },
                            root: { color: 'black' },
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon onClick={handleClick} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}

                    />


                </Stack>

                <MyButton submit={handleClick} padding={padding} />
            </div>


        </div>
    )
}


function LandingHeader() {
    return (
        <div className="landing-header-texts" >
            <h1>My <b>Coffee</b> Place</h1>

            <div>
                <h3>Hi {localStorage.getItem("userName")}</h3>
                <h3>Have you had coffee?</h3>
            </div>

        </div>
    )
}

export default LandingPage
