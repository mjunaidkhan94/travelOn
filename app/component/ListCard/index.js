//import liraries
import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Toast, Container, Header, Title, Content, List, ListItem, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

// create a component
export default class ListCard extends Component {
    render() {
        return (
            <ListItem onPress={() => {
                Alert.alert('You tapped Card#1!')}}>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail  source={{uri:(this.props.logo)}} />
                        <Body>
                            <Text>{this.props.title}</Text>
                            <Text note>{this.props.desr}</Text>
                        </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri:(this.props.img)}}  style={{height: 200, width: null, flex: 1}}/>
                    </CardItem> 
                </Card>
            </ListItem>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
  
});

//make this component available to the app
