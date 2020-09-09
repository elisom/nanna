import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,I18nManager } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Evil from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../constant/colors'
import { useTranslation } from 'react-i18next'
import RNRestart from 'react-native-restart'

const Header = () => {
	const navigation = useNavigation()
	const { t, i18n } = useTranslation(); 
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image width="100" source={require('../assets/img/Bitmap.png')}></Image>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => i18n.changeLanguage(i18n.language === 'he' ? 'en' : 'he').then(()=>{
				I18nManager.forceRTL(i18n.language === 'he')
				RNRestart.Restart()
			}
			)}>
				<Image
					width="100"
					source={require('../assets/img/Bitmap-1.png')}></Image>
			</TouchableOpacity>

			<Text style={styles.appName}>{t('app_name')} </Text>
			<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
				<MCI name="menu" size={25} color="#000" />
			</TouchableOpacity>
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
		color: '#000',
		marginLeft: 90,
		fontSize: 15,
	},
})

export default Header
