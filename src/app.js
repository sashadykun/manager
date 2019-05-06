import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/login_form';
import ReduxThunk from 'redux-thunk';
import Router from './router';





const firebaseConfig = require('./auth/fire_config')



class App extends Component {

    componentDidMount (){
        console.log('this.pops', this.props)
        firebase.initializeApp(firebaseConfig);
    }
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
            
        )
    }
}

export default App;