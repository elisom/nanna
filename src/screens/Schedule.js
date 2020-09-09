import React , { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Image } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dialog } from 'react-native-simple-dialogs'


const Schedule = ({ navigation }) => {
	const [shoDialogue, setshoDialogue] = useState(false)
	const [selectedTimeSlotIndex, setSelectedTimeSlotIndex] = useState(-1)
	const [selectedTimeBlock, setSelectedTimeBlock] = useState(-1)

	return (
		<View style={styles.container}>
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
					
					<Image
						style={{ marginLeft: 15,
							borderRadius: 50,
							height: 200,
							width: 200,
							backgroundColor: 'gray',
							}}
						source={require('../assets/img/tick.jpg')}></Image>
					<Text style={{ textAlign: 'center', marginTop: 20 }}>
					לורם איפסום הוא כינוי לטקסט חסרן 
					</Text>
					<Text style={{ textAlign: 'center'}}>
					19:00-19:30 
					</Text>
					<TouchableOpacity
						onPress={() => {
							setshoDialogue(false)
						}}>
						<View
							style={[
								styles.button,
								{
									width: 200,
									backgroundColor: '#FFFFFF',
									height: 40,
									color: '#000',
								},
							]}>
							<Text style={{ color: '#000' }}>Lorem Ipsum</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setshoDialogue(false)
							navigation.navigate('Chat')
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
							<Text style={{ color: '#000' }}>Lorem Ipsum</Text>
						</View>
					</TouchableOpacity>
				</View>
			</Dialog>
			<View style={styles.header}>
				<Text style={styles.headerText}>Lorem Ipsum</Text>
				<MCI
					onPress={() => navigation.navigate('SliderScreen')}
					name="arrow-right"
					color="#fff"
					size={25}
				/>
			</View>
			<View style={styles.subHeader}>
				<Text style={styles.subHeaderText}>Lorem ipsum dolor sit amet,</Text>
			</View>
			<ScrollView>
				<View style={styles.main}>
					{Array.from(new Array(5)).map((el, i) => {
						return (
							<View style={styles.section} key={i}>
								<Text style={styles.sectionTitle}>Lorem Ipsum</Text>
								<TouchableOpacity onPress={() => {
										setSelectedTimeSlotIndex(i)
										setSelectedTimeBlock(1)
									}}>
									<View style={selectedTimeSlotIndex === i && selectedTimeBlock ===1 ? styles.selectedOption : styles.option}>
										<Text style={selectedTimeSlotIndex === i && selectedTimeBlock ===1 ?{marginLeft: '35%'} : null}>18:00 - 18:30</Text>
										{selectedTimeSlotIndex === i && selectedTimeBlock ===1 ? <Image
											style={{ marginLeft: '20%',
												borderRadius: 50,
												height: 50,
												width: 50,
												backgroundColor: 'black',
												padding: 0
												}}
											source={require('../assets/img/tick.jpg')}></Image> : null
										}
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => {
										setSelectedTimeSlotIndex(i)
										setSelectedTimeBlock(2)
									}}>	
									<View style={selectedTimeSlotIndex === i && selectedTimeBlock ===2 ? styles.selectedOption : styles.option}>
									<Text style={selectedTimeSlotIndex === i && selectedTimeBlock ===2 ?{marginLeft: '35%'} : null}>19:00 - 19:30</Text>
									{selectedTimeSlotIndex === i && selectedTimeBlock ===2 ? <Image
										style={{ marginLeft: '20%',
											borderRadius: 50,
											height: 50,
											width: 50,
											backgroundColor: 'black',
											}}
										source={require('../assets/img/tick.jpg')}></Image> : null
									}
									</View>
								</TouchableOpacity>	
								<TouchableOpacity onPress={() => {
									setSelectedTimeSlotIndex(i)
									setSelectedTimeBlock(3)
								}}>
									<View style={selectedTimeSlotIndex === i && selectedTimeBlock ===3 ? styles.selectedOption : styles.option}>
									<Text style={selectedTimeSlotIndex === i && selectedTimeBlock ===3 ?{marginLeft: '35%'} : null}>20:00 - 20:30</Text>
									{selectedTimeSlotIndex === i && selectedTimeBlock ===3 ? <Image
										style={{ marginLeft: '20%',
											borderRadius: 50,
											height: 50,
											width: 50,
											backgroundColor: 'black',
											}}
										source={require('../assets/img/tick.jpg')}></Image> : null
									}
									</View>
								</TouchableOpacity>	
	
							</View>
						)
					})}
				</View>
			</ScrollView>
			<TouchableOpacity
			onPress={() => {
				setshoDialogue(true)
			}}
			>
				<View style={styles.btn}>
					<Text>Lorem Ipsum</Text>
				</View>
			</TouchableOpacity>
			
		</View>
	)
}

export default Schedule

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EDEDED',
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
	subHeaderText: {
		textAlign: 'right',
		color: 'black',
	},
	subHeader: {
		padding: 20,
		backgroundColor: '#fff',
	},
	option: {
		backgroundColor: '#fff',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginBottom: 10,

	},
	main: {
		padding: 20,
	},
	sectionTitle: {
		fontSize: 18,
		textAlign: 'right',
		marginVertical: 10,
	},
	btn: {
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#38D6CA',
	},
	button: {
		borderRadius: 30,
		backgroundColor: '#dedede',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginTop: 5,
	},
	selectedOption: {
		backgroundColor: '#fff',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginBottom: 10,
		borderWidth: 3,
		borderColor: '#38D6CA',
		flexDirection: "row",

	}
})
