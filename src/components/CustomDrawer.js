import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity,Image } from 'react-native'
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { Badge } from 'react-native-elements'

function CustomDrawer(props) {
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
				<MCI name="close" size={25} style={styles.close} />
			</TouchableOpacity>
			<View style={styles.profile}>
				<Text style={{fontSize: 22}}>הודעות</Text>
				{/* <View style={styles.photo}> */}
				<Image
					style={styles.photo}
					source={require('../assets/img/Mask.png')}
				/>
				{/* </View> */}
			</View>
			<DrawerContentScrollView {...props}>
				<DrawerItem label="לורם איפסום" labelStyle={styles.drawerLabelStyle} style={{ alignItems: 'flex-end' }} onPress={() => {
					props.navigation.closeDrawer()
					props.navigation.navigate('Profilesetup')
				}}/>
				<DrawerItem label="אם בשלב" labelStyle={styles.drawerLabelStyle} style={{ alignItems: 'flex-end' }} onPress={() => {
					props.navigation.closeDrawer()
					props.navigation.navigate('ChatList')}}/>
				<DrawerItem label="הקלדת" labelStyle={styles.drawerLabelStyle} style={{ alignItems: 'flex-end' }} onPress={() => {}}/>
			</DrawerContentScrollView>
			<Text style={styles.bottomText}>Lorem Ipsum</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	infoContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 30,
	},
	close: {
		alignSelf: 'flex-end',
		margin: 20,
		marginBottom: 0,
		marginRight: 40,
	},
	photo: {
		borderRadius: 50,
		height: 50,
		width: 50,
		backgroundColor: 'gray',
		marginLeft: 15,
	},
	profile: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		margin: 20,
		marginRight: 40,
	},
	bottomText: {
		margin: 40,
		alignSelf: 'flex-end',
		color: 'gray',
	},
	drawerLabelStyle: {
		fontSize: 18,
		color: 'black'
	}
})

export default CustomDrawer
