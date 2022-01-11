import axios from 'axios';

export const getAllCafes=()=>async dispatch=>{
    const posts = await axios.get("https://hidden-fjord-84882.herokuapp.com/restaurant")

    dispatch({
        type : "GET_ALL_CAFE",
        payload :posts.data
    })
}

export const getCheckedCafes=()=>async dispatch=>{
    const posts = await axios.get("https://hidden-fjord-84882.herokuapp.com/restaurant")
    
   // console.log("actiondan gelen checked: ",ischecked)
    dispatch({
        type : "GET_FILTERED_CAFE",
        payload :posts.data
    })
}

export const getOneCafeById=(id)=>async dispatch=>{
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/restaurant/${id}`)

    dispatch({
        type : "GET_ONE_CAFE",
        payload : posts.data
    })
}

export const getCafeNameContains=(input)=>async dispatch=>{
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/restaurant/cn/${input}`)

    console.log("contains action",posts.data)

    dispatch({
        type : "GET_CAFE_CONTAINS",
        payload : posts.data
    })
}


