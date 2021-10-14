import {Get_Totel , Get_Current } from '../action-types';

const initialState = {
    totel:2193,
    currentPage:1,
    
   
}
export default function(state = initialState, action){

    switch(action.type){

        case Get_Current:
        return {
            ...state,
            currentPage:action.payload,
           

        }
        default: return state
    }
    return state

}