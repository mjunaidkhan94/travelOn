//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Button, Content,  Card, CardItem, Left, Body, Right, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

// create a component
export default class ActivityScreen extends Component {
    render() {
  
       let imgList = {
            boating:{ url : require('../../../../images/boating.png'),
                      color: 'cyan',
                      title: 'OCEAN',
                      heading: 'Boating',
                      details: 'Elevate your inside game. A negative attitude is below the horizon',
                    },  
            hiking: { url : require('../../../../images/hiking.png'),
                      color: 'yellow',
                      title: 'MOUNTAINS',
                      heading: 'Hiking',
                      details: 'Adventure begins, high mountains!',
                    },
            diving: { url : require('../../../../images/diving.png'),
                      color: 'green',
                      title: 'SWIM',
                      heading: 'Diving',
                      details: 'Swim in the deep of sea',
                    }
        }

        return (
            <Container  style={styles.container}>
                <Content>
                   <Image source={imgList[this.props.image]['url']} style={styles.image}/>
                   <Text style={[styles.title,{color:imgList[this.props.image]['color']}]}>
                   {imgList[this.props.image]['title']}</Text>
                   <Text style={styles.heading}>{imgList[this.props.image]['heading']}</Text>
                   <Text style={styles.detials}>{imgList[this.props.image]['details']}</Text>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        // flex:1,
    },
    image:{
        height:270, 
        width:null,
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 10
    },
    title:{
        paddingTop: 40,
        paddingLeft: 15,
        fontSize: 20
    },
    heading:{
        paddingLeft: 15,
        paddingTop: 10,
        color:'white',
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    detials:{
        paddingLeft: 15,
        paddingBottom: 15,
        paddingTop: 15,
        color:'gray',
        fontSize: 23,
        fontFamily: 'skia'
    }
});

//make this component available to the app
