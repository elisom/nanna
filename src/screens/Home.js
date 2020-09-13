import React, { Component } from 'react'
import { ImageBackground, View, Text, StyleSheet, Image, ScrollView,Dimensions } from 'react-native'
import Header from '../components/Header'
import Button from '../components/Button'
import Trainerprofile from '../components/Trainerprofile'
import LinearGradient from 'react-native-linear-gradient';

class Home extends Component {
	constructor(props) {
	  super(props);
	  
	  this.state = {
		showTrainer: false,
		initialQuestion: true,
		nextQuestion: false,
		showTrainerProfile: false,
		buttonDisplay: true
	  };
	}
    viewProfile() {
		Navigation.navigator('Profile')
	}
	botChat = () => {
		if(this.state.initialQuestion === true && this.state.nextQuestion === false) {
			this.setState({
				nextQuestion: true
			})
		} else if (this.state.initialQuestion === true && this.state.nextQuestion === true) {
			setTimeout(
				function() {
					this.setState({showTrainerProfile: true});
				}.bind(this),
				5000
			)
			this.setState({
				buttonDisplay: false
			})
		}else {
			this.setState({
				initialQuestion: true
			})
		}
	}
	render() {
		const { height } = Dimensions.get('window');
		return (
			<View style={styles.container}>
				<ScrollView>
				 <LinearGradient colors={['#FFB7AF', '#FEA89F']} style={styles.gradient} start={{ x: 0, y: 0.7 }}>        
      
				<Header></Header>
				
				{/* <ImageBackground
					source={require('../assets/img/Group.png')}
					style={styles.image}> */}
					{ this.state.initialQuestion === true ? 
					<View style={[styles.box,{marginTop: '10%'}]}>
						<Image
							style={styles.logo}
							source={require('../assets/img/logo.png')}></Image>
						<Text style={styles.boxText}>
					. פרפקציוניזם זה מתכון נהדר לחיים של חוסר שביעות רצון תמידי ודיכאון. די לטפח את התכונה הזאת ולהתגאות בה. די להעביר את זה לילדים שלנו. השתחררו מהצורך במושלמות והתחילו לחגוג את החיים.
						</Text>
					</View> : null }
					{ this.state.nextQuestion === true ? <View style={[styles.box,{marginTop: '5%'}]}>
						<Image
							style={styles.logo}
							source={require('../assets/img/logo.png')}></Image>
						<Text style={styles.boxText}>
					.ה לילדים שלנו. השתחררו מהצורך במושלמות והתחילו לחגוג את החיים.
						</Text>
					</View> : null }
					{this.state.showTrainerProfile === true ?
					<Trainerprofile /> : null }
					
					{/* <Button
						fontcolor="#000"
						color="#38D6CA"
						bwidth={200}
						bheight={40}
						onPress={this.viewProfile}
						></Button> */}
				{/* </ImageBackground> */}

				{this.state.buttonDisplay === true ? <View style={[styles.footer, this.state.buttonDisplay === true && this.state.initialQuestion === false ?{marginTop: height * 0.6, height: height * 40 /100,padding:10} : this.state.initialQuestion === true && this.state.nextQuestion === true && this.state.buttonDisplay === true ? {marginTop: height * 0.3, height: height * 40 /100,padding:10} : {marginTop: height * 0.4, height: height * 40 /100,padding:10}]}>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						<Button
							onPress={this.botChat}
							fontcolor="#fff"
							color="#C64F42"
							bwidth={200}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#E8695C"
							bwidth={150}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#EF678D"
							bwidth={360}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#EF67B2"
							bwidth={360}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#45E324"
							bwidth={150}
							bheight={40}></Button>
						<Button
							fontcolor="#fff"
							color="#EDCD1A"
							bwidth={200}
							bheight={40}></Button>
					</View>
				</View> : <View style={{marginTop:400}}></View> }
				</LinearGradient>	
				</ScrollView>

			</View>
		)
    }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 20,
	},
	text: {
		color: 'grey',
		fontSize: 30,
		fontWeight: 'bold',
	},
	footer: {
		width: '100%',
		// backgroundColor: '#fff',
		// marginTop:"45%"
		
	},
	box: {
		width: '80%',
		minHeight: 150,
		backgroundColor: '#fff',
		marginLeft: '15%',
		borderRadius: 30,
		padding: 10,
		justifyContent: 'flex-start',
		// marginTop: '60%',
	},
	logo: {
		marginTop: -30,
		marginLeft: -30,
		width: 50,
		height: 65,
	},
	boxText: {
		fontSize: 15,
	},
})
export default Home
