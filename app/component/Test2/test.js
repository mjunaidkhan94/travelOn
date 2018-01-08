//import liraries
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

// create a component
export default class Test extends Component {
    render() {
        return (
        <Image
        source={require('../../../images/snow-mountains.jpg')}
        style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </Image>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
