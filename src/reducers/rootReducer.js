import { combineReducers } from 'redux';
import cafeReducer from './cafeReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    cafe:cafeReducer,
    comment:commentReducer
    
})

export default rootReducer;