import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import redusers from './reducers';
import firebase from 'firebase';
const firebaseConfig = require('./auth/firebase_config')


class App extends Component {

    componentDidMount (){
        firebase.initializeApp(firebaseConfig);
    }
    
    render() {
        return (
            <Provider store={createStore(redusers)}>
                <View>
                    <Text>some text to render</Text>
                </View>
            </Provider>
            
        )
    }
}

export default App;