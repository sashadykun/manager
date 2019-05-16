import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { employeeFetch } from '../actions';
import ListItem from './list_item';


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

    renderRow(employee){
        return <ListItem employee={employee} />;
    }
    
    render() {
        return console.log('this.props',this.props)

        // return (
        //     <View>
        //         <Text>text</Text>
        //     </View>
            
        //     <ListView 
        //         enableEmptySections
        //         dataSource={this.dataSource}
        //         renderRow={this.renderRow}
        //     />
        // )

    }
}

const mapStateToProps = state => {
    
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    })
    return { employees };
}

export default connect(mapStateToProps, { employeeFetch }) (EmployeeList);