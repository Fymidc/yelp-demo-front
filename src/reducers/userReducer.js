const initialState ={
    user : []

}

export default function cartReducer(state=initialState,{type,payload}){

    switch (type) {
        case 'GET_ONE_USER':
            return {
                
                user:payload
            }

    
        default:
           return state
    }

}