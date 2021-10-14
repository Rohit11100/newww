import {DELETE_CONTACT, GET_USERS} from '../action-types'

const initialState = {
    users:[],
    
    loading:true
   
}

export default function(state = initialState, action){
    if(action.type===DELETE_CONTACT){
    // const contactFilter = state.map((user, index) =>
    // index === action.payload ? null : user
    //     );
    //  state = contactFilter;
    
     return state
    }



    switch(action.type){
       

        case GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading:false

        }
        case DELETE_CONTACT:

            
           
    
        
      
        default: return state
    }
   

}