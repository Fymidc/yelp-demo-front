import React from 'react'
import Button from '@mui/material/Button';

function MyButton() {

    const onClickHandler=()=>{
        console.log("bastum")
    }

    return (
        <div className="my-button" >
            <Button onClick={()=>onClickHandler()} color="warning" variant="contained">Find My Coffee</Button>
        </div>
    )
}

export default MyButton
