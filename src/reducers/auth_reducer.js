import { statement } from "@babel/template";

//reducer is function take 2 arguments and exported by default which never can return underfined
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log('action', action)
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        default:
            return state;
    }
}