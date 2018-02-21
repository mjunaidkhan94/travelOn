import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';

import { Label, Button, Container, Content, Header, Tab, Tabs, Form, Item, Input, TabHeading, Icon, Text } from 'native-base';
import LoginForm from '../../component/LoginForm';

export default class Login extends Component {
  
  render() {
    return (

        <ImageBackground source={require('../../../images/diving.png')} style={styles.backgroundImage} >
        
        {/* <Content style={styles.logoContainer}> */}
        <Image
            style={styles.logo}
            source={require('../../../images/logox.png')} 
            />
            <Text style={styles.textLogo}>TravelOn</Text>
        {/* </Content> */}

        
            <Form style={styles.formContainer}>
                <Item  style={styles.input}>
                <Input placeholder="Username"/>
                </Item>
                <Item style={styles.input}>
                <Input placeholder="Password"/>
                </Item>
            </Form>
            <Button style={styles.loginButton}><Text style={styles.text}> Login </Text></Button>
            </ImageBackground>
    );
  }

}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        width: null,
    },
    data:{
        position: 'absolute',
        color:'white',
    },
    logo:{
        height: 120,
        width: 100,
    },
    formContainer:{
        margin: 20,
        marginBottom: 20,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor:'rgba(255,255,255,0.3)'
    },
    input:{
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,1)'
    },
    loginButton:{
        margin: 10,
        // marginBottom: 10,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    text:{
        color: 'black'
    },
    textLogo:{
        color: 'black'
    },
    logoContainer:{
        padding: 10,
        margin: 10,
    }
});