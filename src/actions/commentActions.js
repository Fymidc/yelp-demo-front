
import axios from 'axios';

export const getAllComments=(restaurantid,customerid)=>async dispatch=>{
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/comment/?customerid=&restaurantid=${restaurantid}`)

 

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

   

    dispatch({
        type : "EDIT_COMMENT",
        payload : posts.data
    })
}

export const deleteComment=(id)=>async dispatch=>{
  
  

   await axios.delete(`https://hidden-fjord-84882.herokuapp.com/comment/${id}`,{
        headers: {
            "Authorization": localStorage.getItem("tokenKey")
        }
    })
   
    dispatch({
        type : "DELETE_COMMENT",
        payload : id
    })
}

