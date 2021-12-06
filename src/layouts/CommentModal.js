import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { Divider, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CommentModal(props) {

    const [input, setinput] = useState("")

    const inputHandler=(e)=>{
        setinput(e.target.value)
        
    }

    const initialValues = {
        text: "",
        userId: 1,
        restaurantId: 2
    }

    console.log(input)

    const dispatch = useDispatch();

    const submitComment = (val) => {
        
        console.log(val)
        //dispatch(createComment())
        props.handleClose();
    }
    return (
        <div>


            <Modal
                open={props.open}
                onClose={props.handleClose}

            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            submitComment(values)
                        }}

                    >
                        <Form  >
                        <Field
                             id="text" label="Write a review" 
                             name="text"
                             style={{color: "red"}}
                             variant="standard" 
                             render={({field})=><TextField {...field} />}
                             onChange={(e)=>inputHandler(e)}
                              placeholder="write a review" />

                            <Divider sx={{ margin: "1rem" }} />
                            <Button color="warning" startIcon={<SendIcon />} variant="outlined" type="submit" >Send</Button>
                            <Button sx={{ marginLeft: "1rem" }} color="warning" startIcon={<CloseIcon />} variant="outlined" onClick={() => props.handleClose()} >Cancel</Button>

                        </Form>

                    </Formik>

                </Box>
            </Modal>

        </div>
    )
}

export default CommentModal

// <Button style={{ marginTop: "1rem", marginRight: "1rem" }} color="warning" startIcon={<SendIcon />} variant="outlined">Send</Button>
//         <Button style={{ marginTop: "1rem", marginRight: "1rem" }} color="warning" startIcon={<CloseIcon />} variant="outlined">Cancel</Button>
//         <TextField id="standard-basic" label="Standard" variant="Write a review..." />
