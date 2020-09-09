import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { Badge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ChatList = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Lorem Ipsum</Text>
				<MCI
					onPress={() => navigation.navigate('Home')}
                    name="arrow-right"
                    size={25} 
				/>
			</View>
			<ScrollView>
				<View style={styles.bodyContainer}>
				<TouchableOpacity style={styles.mainCard} onPress={() => {
							navigation.navigate('Chat')
						}}>
						<View style={styles.card}>
							<View>
								<Text style={styles.cardHeadingText}>התפתחות </Text>
								<Text style={styles.cardBodyText}>בה אתה 
								</Text>
							</View>
							<Badge value="1"   containerStyle={{ position: 'absolute', top: 10, right: 350}} textStyle={{color: 'white', fontSize: 16}} />
							<Image
								style={styles.photo}
								source={require('../assets/img/profile.jpeg')}
							/>
						</View>
						<View style={styles.cardContent}>
						    <Text style={styles.cardText}>את היא לערוך לעריכת אקטואליה</Text>
						</View>
                    </TouchableOpacity>  
					<TouchableOpacity style={styles.mainCard} onPress={() => {
							navigation.navigate('Chat')
						}}>
						<View style={styles.card}>
							<View>
								<Text style={styles.cardHeadingText}>התפתחות</Text>
								<Text style={styles.cardBodyText}>בה אתה </Text>
							</View>
							<Badge value="3"   containerStyle={{ position: 'absolute', top: 10, right: 350}} textStyle={{color: 'white', fontSize: 16}} />
                        <Image
							style={styles.photo}
                            source={require('../assets/img/Mask.png')}
                        />
						</View>
						<View style={styles.cardContent}>
						    <Text style={styles.cardText}>את היא לערוך לעריכת אקטואליה</Text>
						</View>
                    </TouchableOpacity>   
					<View style={styles.mainCard}>
						<View style={styles.card}>
							<View>
								<Text style={styles.cardHeadingText}>התפתחות</Text>
								<Text style={styles.cardBodyText}>בה אתה </Text>
							</View>
                        <Image
							style={styles.photo}
                            source={require('../assets/img/Mask.png')}
                        />
						</View>
						<View style={styles.cardContent}>
						    <Text style={styles.cardText}>את היא לערוך לעריכת אקטואליה</Text>
						</View>
                    </View>     
				</View>
			</ScrollView>
		</View>
	)
}

export default ChatList

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E6E5E5',
	},
	bodyContainer: {
		flex:1,
		backgroundColor: '#E6E5E5',
		marginTop: 15
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
	headerText: {
		marginRight: 15,
		fontSize: 18,
	},
	photo: {
		borderRadius: 50,
		height: 50,
		width: 50,
		backgroundColor: 'gray',
		marginLeft: 15,
	},
	cardHeadingText: {
		textAlign: 'right',
		fontSize: 16,
	},
	cardBodyText: {
		textAlign: 'right',
		fontSize: 14,
		color: 'gray'
	},
	card: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		elevation: 2
	},
	cardText: {
		fontSize: 16
	},
	cardContent: {
		paddingVertical: 10
	},
	mainCard : {
		backgroundColor: '#fff',
		paddingHorizontal:15,
		paddingVertical: 25,
		marginBottom: 5
	}
})
