import React, { useState } from 'react'
import { Box, Button,  Divider,  Input,  InputAdornment,  TextField,  Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import VisibilityIcon from '@mui/icons-material/Visibility';
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
function SignUpPage() {

    const [input, setinput] = useState("")
    const [visible, setvisible] = useState(false)

    const navigate = useNavigate()

    const inputHandler = (e) => {
        setinput(e.target.value)

    }

    const initialValues = {
        userName: "",
        email: "",
        password: "",
    }

    const submitRegister = (val) => {

        console.log("sign up ", val)

        navigate("/login")

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
                    Sign up for more feature
                </Typography>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        submitRegister(values)
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
                            id="email" label="email"
                            name="email"
                            style={{ color: "red" }}
                            variant="standard"
                            render={({ field }) => <TextField {...field}
                            variant="standard"
                            sx={{width:"55%"}}
                           

                            type="email" placeholder="E-mail" />}
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


                        <Button sx={{ width: "400px" }} color="warning" variant="outlined" type="submit" >Sign up</Button>




                    </Form>

                </Formik>

            </Box>
        </>
    )
}

export default SignUpPage
