import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation,useNavigationState } from '@react-navigation/native'
const Chat = () => {
	const navigation = useNavigation()
	const stat = useNavigationState(state => state);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Lorem Ipsum</Text>
				<MCI
					onPress={() => { 
						stat.routes[stat.routes.length - 2].name === 'Schedule' ? navigation.navigate('Home') : navigation.goBack()}}
					name="close"
					size={25}
				/>
			</View>
			<ScrollView>
				<View style={styles.chatContainer}>
					<View style={styles.leftBubble}>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							eveniet dolorem
						</Text>
						<Text style={styles.time}>15:15</Text>
					</View>

					<View style={styles.rightBubble}>
						<Text style={{ color: '#fff' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							eveniet dolorem
						</Text>
						<Text style={{ color: 'black' }}>15:15</Text>
					</View>
					<View style={styles.videoChatleftBubble}>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							eveniet dolorem
						</Text>
						<Text style={styles.time}>15:15</Text>
					</View>
					<TouchableOpacity  onPress={() => navigation.goBack()}>
						<Text style={styles.videoTimeSetupButton}>lorem Ipsum</Text>
					</TouchableOpacity>

					<View style={styles.rightBubble}>
						<Text style={{ color: '#fff' }}>
							Lorem ipsum 
						</Text>
						<Text style={{ color: 'black' }}>15:15</Text>
					</View>
					<View style={styles.videoChatleftBubble}>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
							eveniet dolorem
						</Text>
						<Text style={styles.time}>15:15</Text>
					</View>
					<TouchableOpacity  onPress={() => navigation.goBack()}>
						<Text style={styles.videoChatButton}>lorem Ipsum</Text>
					</TouchableOpacity>


				</View>
			</ScrollView>
			<View style={styles.sendContainer}>
				<TextInput style={styles.input} placeholder="Type here...." />
				<View style={styles.sendBtn}>
					<MCI name="send" size={20} color="#fff" />
				</View>
			</View>
		</View>
	)
}

export default Chat

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E6E5E5',
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
	chatContainer: {
		marginBottom: 55,
	},
	sendContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 20,
		position: 'absolute',
		bottom: 0,
	},
	input: {
		backgroundColor: '#fff',
		flex: 1,
		marginRight: 10,
		borderRadius: 50,
		height: 40,
		paddingLeft: 10,
	},
	sendBtn: {
		height: 40,
		width: 40,
		borderRadius: 50,
		backgroundColor: '#38D6CA',
		justifyContent: 'center',
		alignItems: 'center',
	},
	leftBubble: {
		width: '70%',
		margin: 15,
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 15,
	},
	rightBubble: {
		width: '70%',
		margin: 15,
		backgroundColor: '#E8695C',
		padding: 10,
		borderRadius: 15,
		alignSelf: 'flex-end',
	},
	time: {
		color: 'gray',
	},
	videoChatButton: {
		backgroundColor : '#00DDFF',
		textAlign: 'center',
		fontSize: 14,
		width: '70%',
		// borderRadius: 15,
		margin: 15,
		padding: 10,
		marginTop: 0,
		borderBottomLeftRadius: 15, 
        borderBottomRightRadius: 15,

	},
	videoTimeSetupButton: {
		backgroundColor : 'gray',
		textAlign: 'center',
		fontSize: 14,
		width: '70%',
		// borderRadius: 15,
		margin: 15,
		padding: 10,
		marginTop: 0,
		borderBottomLeftRadius: 15, 
		borderBottomRightRadius: 15,
		color: 'white'

	},
	videoChatleftBubble: {
		width: '70%',
		margin: 15,
		backgroundColor: '#fff',
		padding: 10,
		// borderRadius: 15,
		marginBottom: 0,
		borderTopLeftRadius: 15, 
        borderTopRightRadius: 15,
	},
})
