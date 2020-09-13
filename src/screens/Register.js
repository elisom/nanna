import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	KeyboardAvoidingView
} from 'react-native'
import Button from '../components/Button'
import RNPickerSelect from 'react-native-picker-select'
import { Picker } from '@react-native-community/picker'

class Register extends Component {
	constructor(props) {
	  super(props);
	  
	  this.state = {
		username: '',
		password: '',
	  };
	}
	login = () => {
		this.props.navigation.navigate('Profilesetup')
	}
	render() {
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<Image
					style={styles.image}
					source={require('../assets/img/logo.png')}></Image>
				<Text style={styles.text}>הרשמה מהירה לנענע</Text>
				<View style={styles.inner}>
					<TextInput style={styles.input} value={this.state.username}
         			 onChangeText={(username) => this.setState({ username })} placeholder='אימייל'/>
					<TextInput style={styles.input} value={this.state.password}
          			onChangeText={(password) => this.setState({ password })} placeholder='סיסמא'/>
					<View style={styles.input}>
						<RNPickerSelect
							placeholder={{}}
							onValueChange={(value) => console.log(value)}
							items={[{ label: '972', value: 'country_code' }]}
						/>
					</View>
					<View style={styles.footer}>
						<Button
							onPress={this.login}
							fontcolor="#000"
							color="#38D6CA"
							bwidth={350}
							bheight={40}
							text="הבא"></Button>
					</View>
				</View>
			</KeyboardAvoidingView>	
		)
	}
	
}
const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		marginTop: 20,
	},
	container: {
		flex: 1,
		alignItems: 'center',
    	justifyContent: 'flex-start',
		backgroundColor: '#FFFDD2'
		
	},
	footer: {
		paddingTop: '45%'
	},
	image: {
		marginTop: 20
	},
	input: {
		height: 40,
		width: 350,
		backgroundColor: '#FAFAFA',
		borderRadius: 30,
		marginTop: 20,
		paddingRight: 10,
		textAlign: 'right',
		color: '#000',
		
	},
	select: {
		borderWidth: 1,
	},
	inner: {		
		marginTop: '10%'
	}
})
export default Register;
