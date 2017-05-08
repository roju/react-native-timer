/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry } from 'react-native';
 import App from './components/app.js';

 export default class timer extends Component {
     render() {
         return (
             <App/>
         );
     }
 }

AppRegistry.registerComponent('timer', () => timer);
