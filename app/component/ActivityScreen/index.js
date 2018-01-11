//import liraries
import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../../images/1.jpg'),
  },
  {
    text: 'Card Two',
    name: 'One',
    image: require('../../../images/2.jpg'),
  },
  {
    text: 'Card Three',
    name: 'One',
    image: require('../../../images/3.jpg'),
  }, 

];
// create a component
export default class ActivityScreen extends Component {
  render() {
    return (
      <Container>
      
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem style={{backgroundColor:'black'}}>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text style={{color:'white'}}>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem style={{backgroundColor:'black'}}>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text style={{color:'white'}}>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
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
    backgroundColor: 'black',
  },
});

//make this component available to the app
