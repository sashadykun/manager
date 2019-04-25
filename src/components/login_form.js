import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';




class LoginForm extends Component {


    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render(){
        console.log('this.props.email',this.props.email)
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
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>

            </Card>
        )
    }
}
const mapStateToProps = state => {
    
    return {
        email: state.auth.email
    }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);
