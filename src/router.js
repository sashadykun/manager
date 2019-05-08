import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login_form';
import EmployeeList from './components/employee_list';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Login Page" initial />
                <Scene key="employeeList" component={EmployeeList} title="Employees" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;