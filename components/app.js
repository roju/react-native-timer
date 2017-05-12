import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import TimerList from './timer-list';
import TimerDetail from './timer-detail';
import { updateTime } from '../actions';

const store = createStore(reducers);

setInterval(()=>{
    store.dispatch(updateTime());
}, 1000);

const Stack = StackNavigator({
    Home: { screen: TimerList },
    Details : {screen: TimerDetail }
 });


class App extends Component {
    render (){
        return (
            <Provider store={store}>
                <View style = {styles.container}>
                    <Stack/>
                </View>
            </Provider>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
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
