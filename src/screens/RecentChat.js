import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'

const RecentChat = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Lorem Ipsum</Text>
				<MCI
					onPress={() => navigation.navigate('ProfileDetail')}
					name="arrow-right"
					size={25}
				/>
			</View>
			<ScrollView>
				<View style={styles.chatContainer}>
					{Array.from(new Array(3)).map((el, i) => {
						return (
							<View style={styles.chatCard} key={i}>
								<View style={styles.top}>
									<View style={styles.badge}>
										<Text style={styles.badgeText}>3</Text>
									</View>
									<View style={styles.info}>
										<View style={styles.nameWrapper}>
											<Text style={styles.name}>Lorem Ipsum</Text>
											<Text style={styles.time}>12:12:12</Text>
										</View>
										<View style={styles.photo}></View>
									</View>
								</View>
								<View style={styles.bottom}>
									<Text style={styles.bottomText}>
										Lorem ipsum dolor sit amet.
									</Text>
								</View>
							</View>
						)
					})}
				</View>
			</ScrollView>
		</View>
	)
}

export default RecentChat

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EDEDED',
	},
	header: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		backgroundColor: '#fff',
		elevation: 2,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	headerText: {
		marginRight: 15,
	},
	chatCard: {
		backgroundColor: '#fff',
		padding: 15,
		marginVertical: 5,
		// alignItems: 'flex-end',
	},
	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	info: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	photo: {
		height: 40,
		width: 40,
		backgroundColor: 'gray',
		borderRadius: 50,
		marginLeft: 15,
	},
	bottomText: {
		textAlign: 'right',
	},
	time: {
		textAlign: 'right',
	},
	badge: {
		height: 30,
		width: 30,
		backgroundColor: 'skyblue',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	badgeText: {
		color: '#fff',
	},
})
