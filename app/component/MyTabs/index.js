//import liraries
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Login from '../Login';

// create a component
export default class MyTabs extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
          <Tab1/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Text>Fb Login</Text></TabHeading>}>
            <Login/>
          </Tab> 
        </Tabs>
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
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
