//import liraries
import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

// create a component
export default class Tab1 extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>Tab1</Text>
            </View>
         
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
