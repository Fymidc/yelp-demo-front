import axios from 'axios';

export const getOneUser=(id)=>async dispatch=>{

    const user= await axios.get(`https://hidden-fjord-84882.herokuapp.com/customer/${id}`)
    
    dispatch ({
        type:"GET_ONE_USER",
        payload:user.data
    })
}

export const loginUser=(val)=>async dispatch=>{

    const user= await axios.post("https://hidden-fjord-84882.herokuapp.com/auth/login",val,
    {
        credentials: 'same-origin'
    })
    
    console.log("loginden gelen: ",user)
    console.log("loginden gelen: ",val.userName)

    localStorage.setItem("tokenKey",user.data.message);
    localStorage.setItem("currenUser",user.data.userId);
    localStorage.setItem("userName",val.userName);

    dispatch ({
        type:"GET_ONE_USER",
        payload:user.data
    })
}

export  const  registerUser = async() =>{

    // const data = await axios.post("http://localhost:8080/auth/register")
    
    // localStorage.setItem("tokenKey",data.message);
    // localStorage.setItem("currenUser",data.userId);
    // localStorage.setItem("userName",data.username);

    
}