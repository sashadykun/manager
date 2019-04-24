import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import redusers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/login_form';





const firebaseConfig = require('./auth/fire_config')



class App extends Component {

    componentDidMount (){
        console.log('this.pops', this.props)
        firebase.initializeApp(firebaseConfig);
    }
    
    render() {
        return (
            <Provider store={createStore(redusers)}>
                <LoginForm/>
            </Provider>
            
        )
    }
}

export default App;