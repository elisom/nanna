import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../components/Button'

const ProfileDetail = ({ navigation }) => {
	chat = () => {
		navigation.navigate('Chat')
	}
	videoSchedule = () => {
		navigation.navigate('Schedule')
	}
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>פרופיל מומחה</Text>
				<MCI
					onPress={() => navigation.navigate('SliderScreen')}
					name="close"
					size={25}
				/>
			</View>
			<ScrollView>
				<View style={styles.main}>
					<View style={styles.top}>
						<Image
							style={styles.photo}
							source={require('../assets/img/Mask.png')}
						/>
						<Text style={styles.name}>רוחמה אברהם</Text>
						<Text style={{ color: 'gray' }}>יועצת הנקה ואכילה</Text>
					</View>
					<View style={styles.section}>
						{/* <Text style={styles.sectionTitle}>Lorem Ipsum</Text> */}
						<Text style={styles.sectionText}>
							
הבינו שהביקורת העצמית והציפיות הגבוהות מעצמנו יוצרים מעגל של התעסקות עם השלילי. במקום לשמוח בדברים הטובים, לחגוג אותם וליהנות מהם, אנו עסוקים בלהתייסר על מה שלא יצא מושלם כפי שרצינו. פרפקציוניזם זה מתכון נהדר לחיים של חוסר שביעות רצון תמידי ודיכאון. די לטפח את התכונה הזאת ולהתגאות בה. די להעביר את זה לילדים שלנו. השתחררו מהצורך במושלמות והתחילו לחגוג את החיים.
במקום לשמוח בדברים הטובים, לחגוג אותם וליהנות מהם, אנו עסוקים בלהתייסר על מה שלא יצא מושלם כפי שרצינו. פרפקציוניזם זה מתכון נהדר לחיים של במקום לשמוח בדברים הטובים, לחגוג אותם וליהנות מהם, אנו
						</Text>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>מייעץ בנושאים</Text>
						<View style={styles.chipContainer}>
							<View style={styles.chip}></View>
							<View style={styles.chip}></View>
							<View style={styles.chip}></View>
							<View style={styles.chip}></View>
						</View>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>שעות עבודה</Text>
						<View style={{ alignSelf: 'stretch' }}>
							<View style={styles.option}>
								<Text>19:00 - 19:30</Text>
							</View>
							<View style={styles.option}>
								<Text>19:00 - 19:30</Text>
							</View>
							<View style={styles.option}>
								<Text>19:00 - 19:30</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.btnContainer}>
				<Button
					onPress={chat}
					fontcolor="#000"
					color="#38D6CA"
					bwidth={300}
					bheight={40}
					text="צ׳אט אונליין עם מומחה"
				/>
				<Button
					onPress={videoSchedule}
					fontcolor="#000"
					color="#38D6CA"
					bwidth={300}
					bheight={40}
					text="תאם שיחת וידאו עם המומחה"
				/>
			</View>
		</View>
	)
}

export default ProfileDetail

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#fff',
		elevation: 2,
	},
	main: {
		padding: 20,
	},
	headerText: {
		marginRight: 15,
		fontSize: 18,
	},
	top: {
		alignItems: 'center',
		marginVertical: 20,
		marginBottom: 30,
	},
	photo: {
		height: 80,
		width: 80,
		backgroundColor: 'gray',
		borderRadius: 50,
		marginBottom: 10,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	section: {
		alignItems: 'flex-end',
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 18,
		marginBottom: 10,
	},
	sectionText: {
		textAlign: 'right',
	},
	option: {
		backgroundColor: '#f9f9f9',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginBottom: 10,
	},
	btnContainer: {
		alignItems: 'center',
		paddingBottom: 10,
	},
	chipContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	chip: {
		height: 25,
		width: 130,
		backgroundColor: '#E9695C',
		borderRadius: 50,
		margin: 10,
	},
})
