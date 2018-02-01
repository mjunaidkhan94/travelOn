//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, Header, Footer, FooterTab, Button, TabHeading, Icon, Text } from 'native-base';
import ActivityScreen from './ActivityScreen';
import Swiper from 'react-native-swiper';
import Splash from '../Splash';

// create a component
export default class Activities extends Component {
    static navigationOptions = {
    header: null
 };

    render() {
        return (
        <Swiper 
        // showsButtons={true}
        >
            <Splash/>
            <ActivityScreen image="boating"/>
            <ActivityScreen image="hiking"/> 
            <ActivityScreen image="diving"/>            
        </Swiper>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       // justifyContent: 'center',
       // alignItems: 'center',
        backgroundColor: 'black',
    },
});

//make this component available to the app
