//import liraries
import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Toast, Container, Header, Title, Content, List, ListItem, Card, CardItem, Icon, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Col, Row, Grid } from 'react-native-easy-grid';


// create a component
export default class Test2 extends Component {

    static navigationOptions =  ({ navigation }) => ({
        header: <Header>
        <Left>
            <Button transparent
            onPress={() => navigation.navigate("Home")}
            >
            <Icon name='arrow-back'/>
            </Button>
        </Left>
        <Body>
            <Title>Detail</Title>
        </Body>
        <Right />
    </Header> 
    });

    render() {
    
        return (
            
            <Container style={styles.container}>
                {/* <Header>
                    <Left>
                        <Button transparent
                        onPress={() => this.props.navigation.navigate("Home")}
                        >
                        <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Tours</Title>
                    </Body>
                    <Right />
                </Header> */}
                
                <ScrollView>

                <Image source={require('../../../images/1.jpg')} style={styles.imageTop}>
                </Image>
                
              
            <View style={styles.headWrapper}>
                <Text style={styles.topTitle}>ADVENTURE!!</Text>
            </View>

                <LinearGradient 
               // colors={['#6dd5ed', 'white']} 
                /*{ colors={['white', '#283048', '#55679a', 'white']} }*/
                colors={['#283048', '#55679a', 'white']}
                style={styles.gradient}>

          <Grid style={styles.grids}>
              <Row style={styles.row}>
                <Col style={styles.col}>
                    <Text style={styles.timelineDay}>DAY 1:
                    <Text style={styles.timelineTitle}> Nathia Gali</Text>
                    </Text>
                    <Text style={styles.timelineDescr}>Your adventure begins with a one-night stay in Helsinki, Finland's capital.</Text>
                </Col>
                <Col>
                </Col>
              </Row>
              <Row style={styles.row}>
                <Col>
                </Col>
                <Col style={styles.col}>
                <Text style={styles.timelineDay}>DAY 2:
                <Text style={styles.timelineTitle}> Nathia Gali</Text>
                </Text>
                <Text style={styles.timelineDescr}>Your adventure begins with a one-night stay in Helsinki, Finland's capital.</Text>
            </Col>
              </Row>
              <Row style={styles.row}>
              <Col style={styles.col}>
              <Text style={styles.timelineDay}>DAY 3:
              <Text style={styles.timelineTitle}> Nathia Gali</Text>
              </Text>
              <Text style={styles.timelineDescr}>Your adventure begins with a one-night stay in Helsinki, Finland's capital.</Text>
          </Col>
                <Col>
                </Col>
              </Row>
              <Row style={styles.row}>
                <Col>
                </Col>
                <Col style={styles.col}>
                <Text style={styles.timelineDay}>DAY 4:
                <Text style={styles.timelineTitle}> Nathia Gali</Text>
                </Text>
                <Text style={styles.timelineDescr}>Your adventure begins with a one-night stay in Helsinki, Finland's capital.</Text>
            </Col>
              </Row>

              <Row style={styles.row}>
              <Col style={styles.col}>
              <Text style={styles.timelineDay}>DAY 5:
              <Text style={styles.timelineTitle}> Nathia Gali</Text>
              </Text>
              <Text style={styles.timelineDescr}>Your adventure begins with a one-night stay in Helsinki, Finland's capital.</Text>
              </Col>
                
              <Col>

              </Col>
              </Row>
            
            </Grid>

            <Image source={require('../../../images/1.jpg')} style={styles.imageBottom}>
                </Image> 
                <LinearGradient 
               // colors={['#6dd5ed', 'white']} 
               colors={['#2e2e2e','black','#2e2e2e']}
               style={styles.goButton2}>
                <Button transparent style={{width:'100%'}}>             
                <Text style={styles.timelineDay}>Lets Go!</Text>
                </Button>
                </LinearGradient> 


                </LinearGradient>

               
            
                </ScrollView>
            </Container>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    imageTop:{
        height: 200,
        width: '100%',
       },
    headWrapper:{
        position:'absolute',
        width:'100%',
        top:50,
    },   
    topTitle:{
        color:'#2a2a2a',
        textAlign:'center',
        justifyContent:'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    goButton:{
        flex:1,
        top: 50,
        position: 'absolute',
        width: '30%',
        right: '35%',
        opacity: 0.9,
        borderRadius: 4,
        justifyContent: 'center',
       },
    goButton2:{
        position: 'absolute',
        marginTop: 50,
        bottom:70,
        width: '30%',
        right: '35%',
        borderRadius: 4,
        justifyContent: 'center',
       },
    imageBottom:{
        width:'100%',
        height:200,
        position: 'relative',
        opacity: 0.05,
        bottom:0,
        marginTop: 50,
    },
    gradient: {
        flex: 3,
        width: '100%',
        height: '100%',
      },
    timelineDay: {
        fontSize: 20,
        color: 'white',
        paddingBottom: 10,
      },
    timelineTitle: {
        fontWeight: 'normal',
        color: 'orange'
      },
    timelineDescr:{
        color: 'white'
      },
    row:{
          padding: 10,
      },

});

//make this component available to the app
