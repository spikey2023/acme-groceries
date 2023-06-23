//import action types
import {  views } from "../actions"

//initial state
const initialState = ''


//views reducer

export default (state = initialState, action ) => {
    switch(action.type) {
        case views:
            return action.payload
        default:
            return state
    }
}