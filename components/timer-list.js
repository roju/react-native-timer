import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import TimerCell from './timer-cell';

import {
    addTimer,
    updateTime,
    selectTimer,
    startTimer
} from '../actions';


class TimerList extends Component {

    constructor(props) {
        super(props);
        this.state = {newName:''};
    }
    render() {
        this.timerCells = this.props.timers.map((timer, i)=> {
            console.log("list timer name: " + timer.name);
            return <TimerCell key={i} name={timer.name} time={timer.time} isPaused={timer.isPaused}/>
        });
        return (
            <View style = {styles.container}>
                <ScrollView>
                    {this.timerCells}
                </ScrollView>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input} value={this.state.name}
                        onChangeText={(text)=>{
                            this.setState({name:text});
                        }}
                    />
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress = {()=>{
                            console.log("name: " + this.state.name);
                            this.props.addTimer(this.state.name)}}>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        timers: state.timers
    }
}

export default connect(mapStateToProps, {
    addTimer, updateTime, selectTimer, startTimer
})(TimerList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center'
    },
    button: {
        width: 10,
        height: 10
    },
    cell: {
        flex: 1,
        borderWidth: 1
    },
    inputBox: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#ddd'
    },
    addButton: {
        flex: 0,
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 3,
        width: 40,
        height: 40,
        backgroundColor: 'yellow'
    }
});
