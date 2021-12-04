//http://localhost:8080/comment/?customerId=1&restaurantId=

import axios from 'axios';

export const getAllComments=(restaurantid,customerid)=>async dispatch=>{
    const posts = await axios.get(`http://localhost:8080/comment/?customerid=&restaurantid=${restaurantid}`)

    console.log(posts);
    console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type : "GET_ALL_COMMENTS",
        payload : posts.data
    })
}
