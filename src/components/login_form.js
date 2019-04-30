import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';




class LoginForm extends Component {


    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props
        this.props.loginUser({ email, password });
    }


    render(){
        console.log('this.props.email',this.props.password)
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="user@domain.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="********"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>

            </Card>
        )
    }
}
const mapStateToProps = state => {
    
    return {
       
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps, { 
    emailChanged,
    passwordChanged,
    loginUser
 })(LoginForm);