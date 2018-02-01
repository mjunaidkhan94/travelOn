//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Swiper from 'react-native-swiper';
// create a component
export default class Splash extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Image
                    style={{
                    flex: 1,
                    }}
                    source={require('../../../images/a.png')} 
                    />
                    <Image
                    source={require('../../../images/logo.png')} 
                    style={styles.image}
                    />
            </Container>
           
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    data:{
        position: 'absolute',
        color:'white',
    },
    image:{
        position: 'absolute',
        height: 120,
        width: 100,
    },
});

//make this component available to the app
