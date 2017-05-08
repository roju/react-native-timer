import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import B from './b';
import { connect } from 'react-redux';

import {
    incrementCounter,
    decrementCounter,
    createCounter,
    resetCounter,
    incrementBy
} from '../actions';

class Counter extends Component {
    renderCounters() {
        console.log(this.props.counters);
        return this.props.counters.map((count, i) => {
            return (
                <View key={i}>
                    <Text style={styles.text}>{count}</Text>
                    <B styles={styles.button} title="+" onPress={()=>{
                        this.props.incrementBy(5, i);
                    }} />
                    <B styles={styles.button} title="-" onPress={()=>{
                        this.props.incrementBy(-5, i);
                    }} />
                    <B styles={styles.button} title='reset counter' onPress={()=>{
                        this.props.resetCounter(i);
                    }}/>
                </View>
            );
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex:1}}>
                    <View style={styles.container}>
                        {this.renderCounters()}
                    </View>
                </ScrollView>
                <B styles={[styles.newCounterButton, styles.buton]} title='new counter' onPress={()=>{
                    this.props.createCounter();
                }}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counters: state.counters
    }
}

export default connect(mapStateToProps, {
    incrementCounter, decrementCounter, createCounter, resetCounter, incrementBy
})(Counter);

//export default Counter;

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
        fontSize: 40
    },
    newCounterButton: {
        flex: 1
    }
});
