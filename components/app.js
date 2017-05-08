import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

import TimerList from './timer-list';

const App = (props) => {
    return(
        <Provider store={createStore(reducers)}>
            <View style = {styles.container}>
                <TimerList/>
            </View>
        </Provider>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f',
        flex: 1
    },
    title: {
        fontSize: 48,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff0'
    }
});
