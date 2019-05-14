import firebase from 'firebase';
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE, 
    EMPLOYEES_FETCH_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';



export const employeeUpdate =({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload:  { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    console.log( 'employeeCreate', name, phone, shift)

    const { currentUser } = firebase.auth();

    return (dispatch) => { // fake redux THUNK to avoid middleware error
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList({ type: 'reset' });
            }) //redirect to employeeList component and reset enire View stack
    };
    
};

export const employeeFetch = () => {

    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({  // watch any changes in database
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
        })
    }
}