import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../constant/colors'

const Button = ({ text, color, bwidth, bheight, fontcolor, onpressevent, onPress }) => {
	const navigation = useNavigation()
	return (
		<TouchableOpacity
			// onPress={() => {
			// 	if (onpressevent == 'profiledetail') {
			// 		navigation.navigate('Profilesetup')
			// 	} else if (onpressevent == 'profile') {
			// 		navigation.navigate('Profile')
			// 	} else if (onpressevent == 'sliderscreen') {
			// 		navigation.navigate('SliderScreen')
			// 	} else if (onpressevent == 'chat') {
			// 		navigation.navigate('Chat')
			// 	} else if (onpressevent == 'schedule') {
			// 		navigation.navigate('Schedule')
			// 	}
			// }}
			onPress={ onPress }
			>
			<View
				style={[
					styles.button,
					{
						width: bwidth,
						backgroundColor: color,
						height: bheight,
						color: fontcolor,
					},
				]}>
				<Text style={{ color: fontcolor }}>{text ? text : 'Lorem Ipsum'}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 30,
		backgroundColor: '#dedede',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginTop: 5,
	},
	text: {
		color: '#fff',
	},
	appName: {
		color: '#fff',
		fontFamily: 'MyriadPro-Regular',
		fontSize: 20,
	},
})

export default Button
