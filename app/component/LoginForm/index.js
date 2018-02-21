//import liraries
import React, { Component } from 'react';
import { Alert, StyleSheet} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

// create a component
export default class LoginForm extends Component {
    render() {
        return (
        <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    // input:{
    //     height: 40,
    //     backgroundColor: 'rgba(225,225,225,0.2)',
    //     marginBottom: 10,
    //     padding: 10,
    //     color: '#fff'
    // },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});
