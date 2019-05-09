import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/login_form';
import EmployeeList from './components/employee_list';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login Page" initial />
                </Scene>
                <Scene key="main">
                    <Scene key="employeeList" component={EmployeeList} title="Employees" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;