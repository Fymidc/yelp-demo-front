import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MyButton from './MyButton';
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment } from '@mui/material';

export default function SearchBar() {

    const inputHandler=(e)=>{
        console.log(e.target.value)
    }

    const handleClick=()=>{
      console.log("bastım yeni icona")
    }

   
    return (
        <Stack className="search-stack" spacing={2} >


        <TextField 
            color="warning"
            onChange={(e)=>inputHandler(e)}
            label="Find coffee place"
            InputProps={{
                type: 'search',
                style:{color:'black',backgroundColor:'white' ,borderColor:'black'},
                root:{color:'black'},
                endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon onClick={()=>handleClick()} />
                      </IconButton>
                    </InputAdornment>
                  )
            }}
            
        />


        </Stack>
    );
}