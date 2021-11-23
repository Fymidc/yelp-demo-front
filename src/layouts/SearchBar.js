import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function SearchBar() {

    const inputHandler=(e)=>{
        console.log(e.target.value)
    }

   
    return (
        <Stack spacing={2} sx={{ width: 400 }}>


        <TextField 
            color="warning"
            onChange={(e)=>inputHandler(e)}
            label="Find coffee place"
            InputProps={{
                type: 'search',
                style:{color:'black',backgroundColor:'white' ,borderColor:'black'},
                root:{color:'black'}
                
            }}

        />


        </Stack>
    );
}