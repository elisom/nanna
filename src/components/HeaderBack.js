import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../constant/colors'

const HeaderBack = ({ pageName }) => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<MCI name="arrow-left" size={25} color="#fff" />
			</TouchableOpacity>
			<Text style={styles.appName}>{pageName}</Text>
			<MCI name="map-marker-outline" size={25} color="#fff" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.themeRed,
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	appName: {
		color: '#fff',
		fontFamily: 'MyriadPro-Regular',
		fontSize: 20,
	},
})

export default HeaderBack
