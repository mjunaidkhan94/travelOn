import React, { Component } from 'react';
import {  Alert, Image, StyleSheet } from 'react-native';
import { Toast, Container, Header, Title, Content, List, ListItem, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ListCard from '../ListCard';


export default class CardImageExample extends Component {
  
  static navigationOptions =  ({ navigation }) => ({
    // title: "Home",  
    // headerLeft:  <Button transparent
    // onPress={() => navigation.navigate("Second")}
    // >
    //   <Icon name='menu'
    //   style={{color:'black'}} />
    // </Button>
    header:  <Header>
    <Left>
      <Button transparent
      onPress={() => navigation.navigate("Second")}
      >
        <Icon name='menu' />
      </Button>
    </Left>
    <Body>
      <Title>Tours</Title>
    </Body>
    <Right />
  </Header>
  });

  constructor(props) {
    super(props);
    // this.state = {
    //   showToast: false
    // }
  }

  render() {

    return (
      <Container style={styles.container}>
      <Content>
        <List>
          <ListCard title="Kashmit Tour" desr="NAC" 
          img="https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_small/mountains-hero.jpg?1345838509" 
          logo="https://cdn.dribbble.com/users/6890/screenshots/2397792/_mountain_logo_dribbble.png"
          rating="5" price="20000"
          navigateTo = {this.props.navigation}/>

          <ListCard title="Kashmit Tour" desr="NAC" 
          img="https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_small/mountains-hero.jpg?1345838509" 
          logo="https://cdn.dribbble.com/users/6890/screenshots/2397792/_mountain_logo_dribbble.png"
          rating="4" price="25000"
          navigateTo = {this.props.navigation}/>

          {/* {/* <ListItem  onPress={() => {
           this.props.navigation.navigate('Detail')}}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../images/logo2.png')} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../../../images/snow-mountains.jpg')}  style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
            </Card>
          </ListItem> */}

          <ListItem  onPress={() => {
           this.props.navigation.navigate('MyTabs')}}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../images/logo3.png')} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../../../images/1.jpg')}  style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
            </Card>
          </ListItem>

          <ListItem  onPress={() => {
            this.props.navigation.navigate('MainLoginScreen')}}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../images/logo4.png')} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../../../images/2.jpg')}  style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
            </Card>
          </ListItem>

          <ListItem  onPress={() => {
           this.props.navigation.navigate('Activities')}}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../images/logo1.png')} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../../../images/3.jpg')}  style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
            </Card>
          </ListItem>     
        </List>
        </Content>
      </Container>
    );
  }
}

let styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
  },
  card:{
    backgroundColor: 'black'
  }
});