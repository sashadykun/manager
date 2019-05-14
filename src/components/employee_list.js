import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeeFetch } from '../actions';



class EmployeeList extends Component {

    componentDidMount (){
        this.props.employeeFetch();

       this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextPtops) {
        //nextProps are the next set of props that this component
        // will be rendered  with
        // this.props is still the old set of props

        this.createDataSource(nextPtops);
    }

    createDataSource({ employees }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !==r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }
    
    render() {

        console.log('this.props',this.props)

        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state)
    const employees = _.map(state.employee, (val, uid) => {
        return { ...val, uid };
    })
    return { employees };
}

export default connect(mapStateToProps, { employeeFetch }) (EmployeeList);