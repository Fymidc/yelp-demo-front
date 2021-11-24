import React from 'react'
import Button from '@mui/material/Button';

function MyButton(props) {

    const onClickHandler=()=>{
        console.log("bastum")
    }

    return (
        <div className="my-button" >
            <Button onClick={()=>onClickHandler()}  style={{marginTop:props.padding}} color="warning" variant="contained">Find My Coffee</Button>
        </div>
    )
}

export default MyButton
