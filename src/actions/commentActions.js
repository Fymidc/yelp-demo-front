//http://localhost:8080/comment/?customerId=1&restaurantId=

import axios from 'axios';

export const getAllComments=(restaurantid,customerid)=>async dispatch=>{
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/comment/?customerid=&restaurantid=${restaurantid}`)

    //console.log(posts);
   // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type : "GET_ALL_COMMENTS",
        payload : posts.data
    })
}

export const createComment=(value)=>async dispatch=>{
    
   const posts = await axios.post("https://hidden-fjord-84882.herokuapp.com/comment",value,{
    headers: {
        "Authorization":localStorage.getItem("tokenKey")
    }
}).catch(e=>console.log("error message :",e.message))


    dispatch({
        type : "CREATE_COMMENT",
        payload : posts.data
    })
}

export const editComment=(value,id)=>async dispatch=>{
   const posts = await axios.put(`https://hidden-fjord-84882.herokuapp.com/comment/${id}`,value,{
    headers: {
        "Authorization": localStorage.getItem("tokenKey")
    }
})

    //console.log("actiondan gelen",value,id);

    dispatch({
        type : "EDIT_COMMENT",
        payload : posts.data
    })
}

export const deleteComment=(id)=>async dispatch=>{
  
    
    //console.log("actiondan geldi",id)

    const res = await axios.delete(`https://hidden-fjord-84882.herokuapp.com/comment/${id}`,{
        headers: {
            "Authorization": localStorage.getItem("tokenKey")
        }
    })
   
    dispatch({
        type : "DELETE_COMMENT",
        payload : id
    })
}

