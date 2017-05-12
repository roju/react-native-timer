import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { toggleTimer } from '../actions';
import B from './b';

class TimerDetail extends Component {
    static navigationOptions = {
      title: 'Timer Details',
    };
    render() {
        let index = this.props.selectedTimer;
        let timerName = this.props.timers[index].name;
        let currentTime = this.props.timers[index].time;

        const buttonTitle = this.props.timers[index].isRunning ? "Stop" : "Start";

        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>{timerName}</Text>
                <Text style = {styles.text}>{currentTime}</Text>
                <B style = {styles.button}
                    isRunning={this.props.isRunning}
                    title={buttonTitle}
                    onPress={()=>{
                        this.props.toggleTimer(index);
                    }}/>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        timers: state.timers,
        selectedTimer: state.selectedTimer
    }
}

export default connect(mapStateToProps, {toggleTimer})(TimerDetail)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 80
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    },
    button: {
        alignItems: 'flex-end'
    }
});
