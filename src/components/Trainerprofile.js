import React, { useState } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import colors from '../constant/colors'
import AppContext from '../context/Context'
import { Dialog } from 'react-native-simple-dialogs'
import Ion from 'react-native-vector-icons/Ionicons'
const Trainerprofile = (props, {onPress}) => {
	const navigation = useNavigation()
	const [shoDialogue, setshoDialogue] = useState(false)
	const data = [
		{
			name: 'ירי מסיקה',
			desigantion:'יועצת עצבים וקריזות'
		},
		{
			name: 'ירי מסיקה',
			desigantion:'יועצת עצבים וקריזות'
		},
		{
			name: 'ירי מסיקה',
			desigantion:'יועצת עצבים וקריזות'
		},
	]
	let trainerProfile = () => {
		navigation.navigate('SliderScreen')
	}
	return (
		<View>
			<Dialog
				visible={shoDialogue}
				onTouchOutside={() => {
					setshoDialogue(false)
				}}
				dialogStyle={{
					borderRadius: 30,
					justifyContent: 'center',
					width: '80%',
					alignItems: 'center',
					alignSelf: 'center',
				}}
				contentStyle={{
					alignItems: 'center',
					width: '80%',
					justifyContent: 'center',
				}}>
				<View style={{ alignContent: 'center' }}>
					<Ion
						onPress={() => {
							setshoDialogue(false)
						}}
						name="close"
						size={20}
						style={{ alignSelf: 'flex-end' }}></Ion>
					<Image
						style={{ marginLeft: 40 }}
						source={require('../assets/img/family.png')}></Image>
					<Text style={{ textAlign: 'center', marginTop: 20 }}>
					בכדי להנות מהתייעצות עם מומחים
					עליך לעבור תהליך הרשמה מהיר
					</Text>
					<TouchableOpacity
						onPress={() => {
							setshoDialogue(false)
							navigation.navigate('Profile')
						}}>
						<View
							style={[
								styles.button,
								{
									width: 200,
									backgroundColor: '#38D6CA',
									height: 40,
									color: '#000',
								},
							]}>
							<Text style={{ color: '#000' }}>הרשמה</Text>
						</View>
					</TouchableOpacity>
				</View>
			</Dialog>
			<FlatList
				data={data}
				keyExtractor={(item) => Math.random().toString()}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				initialNumToRender={10}
				renderItem={({ item }) => (
					<View style={[styles.brandIconsWrap]}>
						<TouchableOpacity onPress={trainerProfile}>
							<Image
								style={styles.image}
								source={require('../assets/img/Mask.png')}
							/>
							<Text style={[styles.brandName]}>{item.name}</Text>
						</TouchableOpacity>	
						<TouchableOpacity
							onPress={() => setshoDialogue(true)}
							style={styles.bttun}>
							<Text style={styles.btntext}>קבל תשובה</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	)
}

export default Trainerprofile

const styles = StyleSheet.create({
	brandIconsWrap: {
		height: 180,
		width: 140,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 15,
		marginVertical: 20,
		elevation: 3,
		backgroundColor: '#fff',
		borderRadius: 10,
	},
	largeCard: {
		height: 160,
		width: 120,
	},
	image: {
		height: 70,
		width: 70,
		marginBottom: 10,
		resizeMode: 'contain',
	},
	brandName: {
		textAlign: 'center',
		marginBottom: 20,
	},
	heart: {
		height: 40,
		width: 40,

		elevation: 2,
		borderRadius: 50,
		position: 'absolute',
		top: -15,
		right: -15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bttun: {
		backgroundColor: '#00DDFF',
		height: 40,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		justifyContent: 'center',
	},
	btntext: {
		textAlign: 'center',
	},
	button: {
		borderRadius: 30,
		backgroundColor: '#dedede',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginTop: 5,
	}
})
