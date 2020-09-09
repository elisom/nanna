import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView
} from 'react-native'

import RNPickerSelect from 'react-native-picker-select'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
// import { Picker } from '@react-native-community/picker'
import { Dialog } from 'react-native-simple-dialogs'
import Ion from 'react-native-vector-icons/Ionicons'

class Profilesetup extends Component {
	constructor(props) {
	  super(props);
	  
	  this.state = {
		showDialogue: false,
		addFamily: false,
		fullName: '',
		dateOfBirth: '',
		familyMember: {
			firstName: '',
			date: ''
		}
	  };
	}
	render() {
		return (
			<View style={styles.container}>
				<Dialog
					visible={this.state.showDialogue}
					onTouchOutside={() => {
						this.setState({
							showDialogue : false
						})
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
								this.setState({
									showDialogue : false
								})
							}}
							name="close"
							size={20}
							style={{ alignSelf: 'flex-end' }}></Ion>
						<Image
							style={{ marginLeft: 40 }}
							source={require('../assets/img/family.png')}></Image>
						<Text style={{ textAlign: 'center', marginTop: 20,fontSize: 20 }}>
						ברוך הבא למשפחת NANNA
						</Text>
						<Text style={{ textAlign: 'center'}}>
						מעכשיו תוכל להנות ממידע איכותיי
						וגישה ישירה למומחים בתחומי 
						הורות וילדים
						</Text>
						<TouchableOpacity
							onPress={() => {
								this.setState({
									showDialogue : false
								})
								this.props.navigation.navigate('Home')
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
								<Text style={{ color: '#000' }}>המשך לתשובות</Text>
							</View>
						</TouchableOpacity>
					</View>
				</Dialog>
				<ScrollView>

				<KeyboardAvoidingView behavior='padding' style={styles.container}>
					<Text style={styles.text}>יצירת המשפחה שלי</Text>
					<View style={{ flexDirection: 'row', marginTop: '15%' }}>
						<View style={{ flexDirection: 'column', width: '35%' }}>
							<MCI
								style={{ alignSelf: 'flex-end', paddingTop: 20 }}
								name="chevron-left"
								size={40}></MCI>
						</View>
						<View style={{ flexDirection: 'column', width: '30%' }}>
							<Image
								style={{ alignSelf: 'center' }}
								source={require('../assets/img/prof.png')}></Image>
						</View>
						<View
							style={{ flexDirection: 'column', width: '35%', paddingTop: 20 }}>
							<MCI
								style={{ alignSelf: 'flex-start' }}
								name="chevron-right"
								size={40}></MCI>
						</View>
					</View>
					<Text style={styles.text}>אני (אמא </Text>

						{   this.state.addFamily === false ?
							<View style={{ marginTop: '10%' }}>
								<TextInput style={styles.input} value={this.state.fullName} onChangeText={(fullName) => this.setState({ fullName })} placeholder='אימייל'/>
								<TextInput style={styles.input} value={this.state.dateOfBirth} onChangeText={(dateOfBirth) => this.setState({ dateOfBirth })} placeholder='אימייל'/>
							 </View>
							: null
						}	 
					<View style={styles.input}>
						<RNPickerSelect
							placeholder={{}}
							onValueChange={(value) => console.log(value)}
							items={[{ label: 'רווקה', value: 'Lorem' }]}
						/>
					</View>
					{
						this.state.addFamily == true ? 
						<View>
							<View style={{ flexDirection: 'row', marginTop: '15%' }}>
								<View style={{ flexDirection: 'column', width: '35%' }}>
									<MCI
										style={{ alignSelf: 'flex-end', paddingTop: 20 }}
										name="chevron-left"
										size={40}></MCI>
								</View>
								<View style={{ flexDirection: 'column', width: '30%' }}>
									<Image
										style={{ alignSelf: 'center' }}
										source={require('../assets/img/prof.png')}></Image>
								</View>
								<View
									style={{ flexDirection: 'column', width: '35%', paddingTop: 20 }}>
									<MCI
										style={{ alignSelf: 'flex-start' }}
										name="chevron-right"
										size={40}></MCI>
								</View>
							</View>
							<Text style={{textAlign: 'center',fontSize: 18,marginTop: 20 }}>Lשרה אימנו </Text>

							<View style={{ marginTop: '10%' }}>
								<View>
									<TextInput style={styles.input} value={this.state.familyMember.fullName} onChangeText={(fullName) => this.setState({ ...this.state.familyMember,fullName: fullName })} placeholder='אימייל'/>
								<TextInput style={styles.input} value={this.state.familyMember.Dob} onChangeText={(date) => this.setState({ ...this.state.familyMember, date: date })} placeholder='אימייל'/>
								</View>
							</View> 
						</View>	: null
					}
					<View style={{ flexDirection: 'row', marginTop: '10%' }}>
					<View style={{ flexDirection: 'column', width: '20%' }}>
						<TouchableOpacity onPress= { () => {
							this.setState ({
								addFamily: true
							})
						}}>
							<Image
								style={{ alignSelf: 'center' }}
								source={require('../assets/img/prof.png')} />
						</TouchableOpacity>	
					</View>
					<View style={{ flexDirection: 'column', width: '20%' }}>
						<TouchableOpacity onPress= { () => {
							this.setState ({
								addFamily: true
							})
						}}>
						<Image
							style={{ alignSelf: 'center' }}
							source={require('../assets/img/prof.png')}>
						</Image>
						</TouchableOpacity>	
					</View>
					<View style={{ flexDirection: 'column', width: '20%' }}>
						<TouchableOpacity onPress= { () => {
							this.setState ({
								addFamily: true
							})
						}}>
							<Image
								style={{ alignSelf: 'center' }}
								source={require('../assets/img/prof.png')}>
							</Image>
						</TouchableOpacity>	
					</View>
					<View style={{ flexDirection: 'column', width: '20%' }}>
						<TouchableOpacity onPress= { () => {
							this.setState ({
								addFamily: true
							})
						}}>
						<Image
							style={{ alignSelf: 'center' }}
							source={require('../assets/img/prof.png')}>
						</Image>
						</TouchableOpacity>	
					</View>
					</View>	 		
			

					<View style={styles.footer}>
						<TouchableOpacity
								onPress={() => {
									this.setState({
										showDialogue : true
									})
									// navigation.navigate('SliderScreen')
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
									<Text style={{ color: '#000' }}>צור משפחה וקבל עזרה</Text>
								</View>
							</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>	
				</ScrollView>
			</View>
		)
	}	
}
const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		marginTop: 20,
	},
	container: {
		flex: 1,
		alignItems: 'center',
    	justifyContent: 'flex-start',
		backgroundColor: '#FFFDD2'
	},
	footer: {
		paddingTop: '5%'
	},
	image: {
		marginTop: 20
	},
	input: {
		height: 40,
		width: 350,
		backgroundColor: '#FAFAFA',
		borderRadius: 30,
		marginTop: 20,
		paddingRight: 10,
		textAlign: 'right',
		color: '#000',
	},
	select: {
		borderWidth: 1,
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
export default Profilesetup
