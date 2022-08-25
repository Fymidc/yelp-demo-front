import { Box, Button, Checkbox, Divider, FormControlLabel,  InputAdornment, Link, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '52%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #F8F8F8',
    boxShadow: 24,
    p: 4,
};

function LogInPage() {

    const [input, setinput] = useState("")
    const [visible, setvisible] = useState(false)

    const navigate = useNavigate();

    const inputHandler = (e) => {
        setinput(e.target.value)

    }

    const initialValues = {
        userName: "",
        password: "",
    }

    const dispatch = useDispatch()

    const submitLogin = (val) => {

        dispatch(loginUser(val));

        navigate(-1);

    }

    const handlepassVisibility =()=>{
        setvisible(!visible)
    }

    return (
        <>

            <Typography variant="h4" sx={{ marginTop: "4rem" }} >
                My Coffee Place --Icon
            </Typography>

            <Box sx={style}>

                <Typography variant="h5" sx={{ marginBottom: "2rem", textAlign: "left" }} >
                    Sign in
                </Typography>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        submitLogin(values)
                    }}

                >
                    <Form  >
                        <Field
                            id="userName" label="userName"
                            name="userName"
                            style={{ color: "red" }}
                            variant="standard"
                            render={({ field }) => <TextField {...field}
                            variant="standard"
                            sx={{width:"55%"}}
                            type="text" placeholder="User Name" />}
                            onChange={(e) => inputHandler(e)}


                        />

                        <Divider sx={{ margin: "1rem" }} />

                        <Field
                            id="password" label="password"
                            name="password"
                            style={{ color: "red" }}
                            variant="standard"
                            render={({ field }) => <TextField {...field}
                            variant="standard"
                            InputProps={{
                                endAdornment:(
                                    <InputAdornment position="end"  >
                                        <VisibilityIcon sx={{ cursor: 'pointer' }} onClick={()=>handlepassVisibility()} />
                                    </InputAdornment>
                                )
                            }}

                            type={visible?"text" : "password"} placeholder="Password" />}
                            onChange={(e) => inputHandler(e)}


                        />

                        <Divider sx={{ margin: "1rem" }} />
                        <div style={{display:"flex",justifyContent:"space-around"}} >
                            <FormControlLabel
                                control={
                                    <Checkbox name="rememberme" />
                                }
                                label="Remember me"
                            />
                            <Button sx={{ width:"200px"}} color="warning" variant="outlined" type="submit" >Log In</Button>

                        </div>

                        <Typography sx={{marginTop:"1.5rem",fontSize:16}} component="p" variant="subtitle" >Still doesn't have an account<Link sx={{marginLeft:"0.7rem",textDecoration:"none"}} href="/signup">Sign Up</Link></Typography>

                    </Form>

                </Formik>

            </Box>
        </>
    )
}

export default LogInPage
