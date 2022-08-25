import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment } from '@mui/material';

import { useDispatch } from 'react-redux';
import { getCafeNameContains } from '../actions/cafeActions';

export default function SearchBar(props) {

  const [input, setinput] = useState("")


  const dispatch = useDispatch();


  const inputHandler = (e) => {
    setinput(e.target.value)
  }



  const handleClick = () => {
    submitHandler();
  }

  const submitHandler = (e) => {
    const capitalisedInput = input.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())
    dispatch(getCafeNameContains(capitalisedInput))
    
    
  }




  return (
    <Stack className="search-stack" spacing={2} >


      <TextField
        color="warning"
        onKeyPress={(ev) => {
          if (ev.key === 'Enter' ) {
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
  );
}