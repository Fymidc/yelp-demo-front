import React from 'react'
import Button from '@mui/material/Button';

function MyButton(props) {

    

    return (
        <div className="my-button" >
            <Button onClick={props.submit}  style={{marginTop:props.padding}} color="warning" variant="contained">Find My Coffee</Button>
        </div>
    )
}

export default MyButton
