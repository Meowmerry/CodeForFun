import * as ACCTION_TYPES from '../actions/actions_types'

const initialState = {
    stateprop1 : false
}

const rootReducer = (state = initialState, action) => {

    switch(action.type){

        case ACCTION_TYPES.SUCCESS:
            return {
            ...state,
            stateprop1:true
        }

        case ACCTION_TYPES.FAILURE:
            return{
            ...state,
            stateprop1: false
            }

        default:
            return state 
             
    }

}

export default rootReducer