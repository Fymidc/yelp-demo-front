//http://localhost:8080/comment/?customerId=1&restaurantId=

import axios from 'axios';

export const getAllComments=(restaurantid,customerid)=>async dispatch=>{
    const posts = await axios.get(`http://localhost:8080/comment/?customerid=&restaurantid=${restaurantid}`)

    //console.log(posts);
   // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type : "GET_ALL_COMMENTS",
        payload : posts.data
    })
}

export const createComment=(value)=>async dispatch=>{
    
   const posts = await axios.post("http://localhost:8080/comment",value).catch(e=>console.log("error message :",e.message))

    console.log("actiondan gelen",value);

    dispatch({
        type : "CREATE_COMMENT",
        payload : posts.data
    })
}

export const editComment=(value,id)=>async dispatch=>{
   const posts = await axios.put(`http://localhost:8080/comment/${id}`,value)

    //console.log("actiondan gelen",value,id);

    dispatch({
        type : "EDIT_COMMENT",
        payload : posts.data
    })
}

export const deleteComment=(id)=>async dispatch=>{
  
    
    //console.log("actiondan geldi",id)

    const res = await axios.delete(`http://localhost:8080/comment/${id}`)
   
    dispatch({
        type : "DELETE_COMMENT",
        payload : id
    })
}

