import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StartButton from './start-btn';

const TimerCell = (props) => {
    return (
        <TouchableOpacity>
            <View style = {styles.container}>
                <Text style = {styles.items}>{props.name}</Text>
                <Text style = {[styles.items, styles.time]}>{props.time}</Text>
                <StartButton style = {styles.button} isPaused = {props.isPaused} size = {50}/>
            </View>
        </TouchableOpacity>
    );
}

export default TimerCell;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ff0',
        borderWidth: 3,
        margin: 5,
        padding: 5,
        borderRadius: 10
    },
    items: {
        flex: 0,
        flexDirection: 'row'
    },
    time: {
        flex: 1,
        textAlign: 'center'
    },
    button: {
        flex: 0,
        width: 50,
        height: 50,
        alignItems: 'flex-end'
    }
});
