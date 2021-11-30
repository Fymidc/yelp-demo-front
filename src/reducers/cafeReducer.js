const initialState={
    cafes:[],
    cafe:[],
}

export default function cafeReducer(state=initialState,{type,payload}){
    switch (type) {
        case 'GET_ALL_CAFE':
            return{
                ...state,
                cafes:payload
            }

        case 'GET_ONE_CAFE':
            return{
                ...state,
                cafe:payload
            }
    
        default:
          return{
             ...state,
          } 
    }
}