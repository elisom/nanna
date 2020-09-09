import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../components/Button'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class SliderScreen extends Component {
	constructor(props) {
	  super(props);
	  
	  	this.state = {
			sliderData: [
				{
					id: 1,
					name: 'Lorem ipsum',
					description: ' שלא יצא מושלם כפי שרצינו. פרפקציוניזם זה מתכון נהדר לחיים של חוסר שביעות רצון תמידי ודיכאון. די לטפח את התכונה הזאת ולהתגאות בה. די להעביר את זה לילדים שלנו. השתחררו מהצורך במושלמות והתחילו לחגוג את החיים.'
					
				},
				{
					id: 2,
					name: 'Lorem ipsum',
					description: 'זוהי עובדה מבוססת שדעתו של הקורא תהיה מוסחת על ידי טקטס קריא כאשר הוא יביט בפריסתו. המטרה בשימוש ב-Lorem Ipsum הוא שיש לו פחות או יותר תפוצה של אותיות, בניגוד למלל  ונותן חזות קריאה יותר.הרבה הוצאות מחשבים ועורכי דפי אישים כיום ב-Lorem Ipsum כטקסט ברירת המחדל שלהם, וחיפוש של יחשוף אתרים רבים בראשית דרכם.גרסאות רבות נוצרו במהל'
				},
				{   
					id: 3,
					name: 'Lorem ipsum',
					description: 'דועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית, ונותר כמו שהוא ביסודו. ספר זה הפך פופולרי יותר בשנות ה-60 עם ההוצאה לאור של גליון פונטי המכיל פסקאות של Lorem Ipsum. ועוד יותר לאחרונה עם פרסום תוכנות המחשב האישי כגון Aldus page maker שמכיל גרסאות של Lorem Ipsum.'
				},
			],
			activeContent: {
				id: 1,
				name: 'Lorem ipsum',
				description: 'הפסקאות הסטנדרטיות של Lorem Ipsum שהיו בשימוש מאז המאה ה-16 משוחזרות בתחתית הדף לאלה שמעונייניםץ מקטעים 1.10.32 ו- 1.10.33 מתוך "de Finibus Bonorum et Malorum" של קיקרו משוחזרים גם כן בצורתן המקורית מלווים בגרסה האנגלית משנת 1914, שתורגם על ידי ה. רקהם.'
			}	
		};
	}
	chat = () => {
		this.props.navigation.navigate('Chat')
	}
	videoSchedule = () => {
		this.props.navigation.navigate('ProfileDetail')
	}
	
	changeSliderActiveCard (item) {
		this.setState({
			activeContent: item
		})
	}
	BackButton = () => {
		this.props.navigation.navigate('Home')
	}
	showPorfile = () => {
		this.props.navigation.navigate('ProfileDetail')
	}
	render () {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>תשובות מומחים</Text>
					<MCI 
					name="arrow-right" 
					color="#fff" 
					size={25}
					onPress={this.BackButton}
					/>
				</View>
				<ScrollView>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={styles.cardSlider}>
							<FlatList
								data={this.state.sliderData}
								keyExtractor={(item) => Math.random().toString()}
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								initialNumToRender={10}
								renderItem={({ item }) => (
									<TouchableWithoutFeedback onPress={() => this.changeSliderActiveCard(item)}
									onLongPress={()=> this.showPorfile()}
									> 
										<View style={item.id === this.state.activeContent.id ? styles.activeCard : styles.card}>
											<Image
												style={styles.image}
												source={require('../assets/img/Mask.png')}></Image>
											<Text style={{ color: '#fff' }}>ד׳׳ר ישראל ארצי</Text>
											<Text style={{ color: '#fff' }}>רופא מחלקה איכילוב</Text>
										</View>
									</TouchableWithoutFeedback>
								)}
							/>
						</View>
					</ScrollView>
					<View style={styles.textContainer}>
						<Text style={styles.mainText}>
							{this.state.activeContent.description}
						</Text>
					</View>
				</ScrollView>
				<View style={styles.btnContainer}>
					<Button
						onPress={this.chat}
						fontcolor="#000"
						color="#38D6CA"
						bwidth={300}
						bheight={40}
						text="צ׳אט אונליין עם מומחה"
					/>
					<Button
						onPress={this.videoSchedule} 
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
}

export default SliderScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		padding: 20,
		backgroundColor: '#6A6471',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	headerText: {
		color: '#fff',
		marginRight: 15,
	},
	cardSlider: {
		margin: 20,
		flexDirection: 'row',
	},
	activeCard: {
		height: 150,
		width: 150,
		backgroundColor: '#38D6CA',
		borderRadius: 20,
		// justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
		marginRight: 10,
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 50,
		backgroundColor: '#DCC7BB',
		marginBottom: 10,
	},
	textContainer: {
		margin: 20,
	},
	mainText: {
		textAlign: 'right',
		fontSize: 20,
	},
	btnContainer: {
		alignItems: 'center',
		paddingBottom: 10,
	},
	card: {
		height: 150,
		width: 150,
		// backgroundColor: 'gray',
		borderRadius: 20,
		// justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
		marginRight: 10,
		color: 'black'
	},
})
