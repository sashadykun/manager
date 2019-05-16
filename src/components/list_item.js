import React, { Component } from 'react';
import { Text } from 'react-native'
import { CardSection } from './common';




class ListItem extends Component {

    render() {
        const { name } = this.props.employee; 
        return console.log('name', name)
        // return(

        //     <CardSection>
        //         <Text style={styles.titleStyle}>
        //             {name}
        //         </Text>
        //     </CardSection>
        // )
    }
}

const styles = {
    titleStyle: {
        fornSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;
