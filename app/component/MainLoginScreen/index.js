import React, { Component, PropTypes } from 'react';

import Wallpaper from './Wallpaper';

import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
import { View, StyleSheet, Text } from 'react-native';

import Login from '../../pages/Login';

export default class MainLoginScreen extends Component {
	render() {
		return (
				<Login/>
		);
	}
}
