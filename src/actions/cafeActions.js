import axios from 'axios';

export const getAllCafes=()=>async dispatch=>{
    const posts = await axios.get("http://localhost:8080/restaurant")

    dispatch({
        type : "GET_ALL_CAFE",
        payload : posts.data
    })
}

export const getOneCafeById=(id)=>async dispatch=>{
    const posts = await axios.get(`http://localhost:8080/restaurant/${id}`)

    dispatch({
        type : "GET_ONE_CAFE",
        payload : posts.data
    })
}


