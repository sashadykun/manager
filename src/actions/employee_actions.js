import { EMPLOYEE_UPDATE } from './types';

export const employUpdate =({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload:  { prop, value }
    };
};