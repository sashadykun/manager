import { statement } from "@babel/template";

//reducer is function take 2 arguments and exported by default which never can return underfined
import { EMAIL_CHANGED } from '../actions/types';
const INITIAL_STATE = { email: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        default:
            return state;
    }
}