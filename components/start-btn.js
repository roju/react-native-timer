import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const playImage = require('../images/play.png');
const pauseImage = require('../images/pause.png');

const StartButton = (props) => {

    const image = props.isPaused ? playImage : pauseImage;

    // check styles prop, initialize to empty object

    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
            <View style={[styles.container, props.styles]}>
                <Image source={image} style = {{
                    width: props.size,
                    height: props.size
                }}/>
            </View>
        </TouchableOpacity>
    );
};

// Don't export normally! See connect below...
export default StartButton;

// Styles

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 50,
        height: 50
    }
});
