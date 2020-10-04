import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import SmileSvg from '../../svgs/Smile';

export default Start = () =>{
  	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<SmileSvg fill="black" />
			<Text style={styles.name}>Mood App</Text>
			<TouchableOpacity
				style={styles.get_started}>
				<Text style={styles.button_text}>Get Started</Text>
			</TouchableOpacity>
		</View>
  	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	name: {
		marginTop: 20,
		fontSize: 24
	},
	get_started: {
		padding: 20,
		borderRadius: 10,
		minWidth: 300,
		bottom: 40,
		position: 'absolute',
		backgroundColor: 'black',
		color: 'white'
	},
	button_text: {
		color: 'white', 
		textAlign: 'center', 
		fontSize: 18
	}
});
