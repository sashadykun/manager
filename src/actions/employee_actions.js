import firebase from 'firebase';
import { EMPLOYEE_UPDATE } from './types';
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

    return () => { // fake redux THUNK to avoid middleware error
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => Actions.employeeList({ type: 'reset' })); //redirect to employeeList component and reset enire View stack
    };
    
};