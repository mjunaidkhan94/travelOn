//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet, AsyncStorage } from 'react-native';
import { Container, Content, Header, Footer, FooterTab, Button, TabHeading, Icon, Text } from 'native-base';
import ActivityScreen from './ActivityScreen';
import Swiper from 'react-native-swiper';
import Splash from '../Splash';



// create a component
export default class Activities extends Component {
    

    state = {
        'isVisited': ''
     }

    static navigationOptions = {
    header: null
 };

    componentDidMount = () => {
        // let value = AsyncStorage.getItem('isVisited');
        // this.setState({ 'isVisited': value });
       
   }

   setName = (value) => {
    // AsyncStorage.setItem('isVisited', value);
    // this.setState({ 'isVisited': 'true' });
 }

    render() {
        // isVisited = AsyncStorage.setItem('visited');
    //   this.setName('true');   
        return (
      
        <Swiper 
        // showsButtons={true}
        >
            {this.state.isVisited=='true'?<ActivityScreen image="boating"/>: <Splash/>}
            
            {/* <ActivityScreen image="hiking"/> 
            <ActivityScreen image="diving"/>      
            <Splash/>       */}
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
