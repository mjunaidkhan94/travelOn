/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Main from './app/component/Main';
import Test2 from './app/component/Test2';
import detailTour from './app/component/detailTour';
import { StackNavigator  } from 'react-navigation';

const Navigation = StackNavigator ({
  Home: {screen: Main},
  Second: {screen: Test2},
  Detail: {screen: detailTour}
});

export default Navigation;

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <Main/>
//       // <Test2/>
//     );
//   }
// }