import axios from 'axios';

export const getAllLikes=(restaurantid,customerid)=>async dispatch=>{
    const posts = await axios.get(`http://localhost:8080/like?restaurantid=${restaurantid}`)

    console.log("likes",restaurantid);
   // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type : "GET_ALL_LIKES",
        payload : posts.data
    })
}

export const getCustomerLikes=(customerid,restaurantid)=>async dispatch=>{
    const posts = await axios.get(`http://localhost:8080/like?customerid=${customerid}&restaurantid=${restaurantid}`)

    console.log("likes:cid",customerid,"rid:",restaurantid);
   // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type : "GET_CUSTOMER_LIKES",
        payload : posts.data
    })
}


export const createLike=(customerid,restaurantid)=>async dispatch=>{
  
    
    console.log("actiondan gelen cid:",customerid,"restıd:",restaurantid)
    const data ={
        restaurantid:restaurantid,
        customerid:customerid,
    }

    const res = await axios.post("http://localhost:8080/like",data)
    //console.log("actiondan gelen value",res)
    dispatch({
        type : "ADD_LIKE",
        payload : res.data
    })
}

export const deleteLike=(id)=>async dispatch=>{
  
    
    console.log("actiondan geldi",id)

    await axios.delete(`http://localhost:8080/like/${id}`)
   // console.log("actiondan gelen value",res)
    dispatch({
        type : "DELETE_LIKE",
        payload : id
    })
}