//import liraries
import React, { Component } from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

// create a component
export default class detailTour extends Component {
    render() {
        return (
          <View>
            <Image source={require('../../../images/a.png')}
            style={styles.backgroundImage}>
            </Image>
            <Text>sdfsdf</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
  
    },
});

//make this component available to the app
