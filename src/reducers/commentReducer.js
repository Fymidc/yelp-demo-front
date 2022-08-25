const initialState={
    comments:[]
}

export default function cafeReducer(state=initialState,{type,payload}){
    switch (type) {
        case 'GET_ALL_COMMENTS':
            return{
                ...state,
                comments:payload
            }
    
        case 'CREATE_COMMENT':
            return{
                ...state,
                comments:[...state.comments,payload]
            }

            case 'EDIT_COMMENT':
            return {
                ...state,//commentleri dön gelen id ile aynı ise commentin payloadı değiş
                comments:state.comments.map(comment=>{
                    if(comment.id === payload.id){
                        return payload
                    }else{
                        return comment;//id eşit değilse olan commentin aynısını dön değişmeden
                    }
                })
            }

            case 'DELETE_COMMENT':
            return {
                ...state,
                comments:state.comments.filter(comment=>comment.id !== payload)
            }//id eşit olmayanları dön eşit olan filtrelenmiş oluyor
    
        default:
          return state;
    }
}