import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import GoogleSvg from '../../svgs/Google';
import firebase from '../../utils/Firebase';

export default Auth = ({navigation}) =>{
  	return (
		<View style={styles.container}>
			<StatusBar style="auto" /> 
			<TouchableOpacity
				onPress={() => navigation.navigate('MyModal')}
				style={styles.button}>
				<GoogleSvg style={styles.button_icon} />
				<Text style={styles.button_text}>Sign in with Google</Text>
			</TouchableOpacity>
			<Text style={{color: 'black', top: 20, fontSize: 18}}>Forgot your password?</Text>
		</View>
  	);
}

const formModal = ({ navigation }) =>{
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		  	<Text style={{ fontSize: 30 }}>This is a modal!</Text>
		 	<Button onPress={() => navigation.goBack()} title="Dismiss" />
		</View>
	);
}

const authenticate  = () =>{
	alert('sign in');
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		shadowColor: 'rgba(0,0,0, .1)', // IOS
		shadowOffset: { height: 2, width: 1 }, // IOS
		shadowOpacity: 4, // IOS
		shadowRadius: 3, //IOS
		elevation: 1, // Android

		padding: 20,
		borderRadius: 10,
		minWidth: 300,
		backgroundColor: 'white',
		color: 'white',
		flexDirection: 'row',
	},
	button_icon: {
		height: 20,
		width: 20,
		flex: 2
	},
	button_text: {
		color: 'black', 
		textAlign: 'right', 
		fontSize: 18,
		flex: 2
	}
});
