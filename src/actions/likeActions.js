import axios from 'axios';

export const getAllLikes = (restaurantid, customerid) => async dispatch => {
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/like?restaurantid=${restaurantid}`)

    console.log("likes", restaurantid);
    // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type: "GET_ALL_LIKES",
        payload: posts.data
    })
}

export const getCustomerLikes = (customerid, restaurantid) => async dispatch => {
    const posts = await axios.get(`https://hidden-fjord-84882.herokuapp.com/like?customerid=${customerid}&restaurantid=${restaurantid}`)

    console.log("likes:cid", customerid, "rid:", restaurantid);
    // console.log("customerid",customerid,"restaurantid",restaurantid);

    dispatch({
        type: "GET_CUSTOMER_LIKES",
        payload: posts.data
    })
}


export const createLike = (customerid, restaurantid) => async dispatch => {


    console.log("actiondan gelen cid:", customerid, "restıd:", restaurantid)
    const data = {
        restaurantid: restaurantid,
        customerid: customerid,
    }

    const res = await axios.post("https://hidden-fjord-84882.herokuapp.com/like", data, {
        headers: {
            "Authorization": localStorage.getItem("tokenKey")
        }
    })
    //console.log("actiondan gelen value",res)
    dispatch({
        type: "ADD_LIKE",
        payload: res.data
    })
}

export const deleteLike = (id) => async dispatch => {


    console.log("actiondan geldi", id)

    await axios.delete(`https://hidden-fjord-84882.herokuapp.com/like/${id}`,{
        headers: {
            "Authorization": localStorage.getItem("tokenKey")
        }
    })
    // console.log("actiondan gelen value",res)
    dispatch({
        type: "DELETE_LIKE",
        payload: id
    })
}