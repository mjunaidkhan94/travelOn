//import liraries
import React, { Component } from 'react';
import { Alert, Image, View, StyleSheet } from 'react-native';
import { Toast, Container, Header, Title, Content, Badge, List, ListItem, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

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
                        <Right>
                            <Icon style={{color:'black', padding:5, fontSize:20}} name='star'>
                            <Icon style={{color:'black', padding:5, fontSize:20}} name='star'/>
                            </Icon>
                            <Badge iconRight style={styles.priceTag}>
                                {/* <Text >2000 Rs</Text>
                                <Text >2000 Rs</Text> */}
                                <Icon style={{color:'white', padding:5, fontSize:13}} name='pricetags'> 
                                <Text style={{color:'white', fontSize:15}}> 2000 Rs</Text></Icon>
                            </Badge>
                        </Right>
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
  priceTag:{
    justifyContent:'center',
    borderRadius: 5,
    backgroundColor: 'black',
  }
});

//make this component available to the app
