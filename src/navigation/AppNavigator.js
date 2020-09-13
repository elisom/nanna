import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNavigator from './DrawerNavigator'
import Profile from '../screens/Profile'
import Profilesetup from '../screens/Profilesetup'
import SliderScreen from '../screens/SliderScreen'
import Schedule from '../screens/Schedule'
import ProfileDetail from '../screens/ProfileDetail'
import Chat from '../screens/Chat'
import RecentChat from '../screens/RecentChat'
import ChatList from '../screens/ChatList'
import Register from '../screens/Register'
import Welcome from '../screens/Welcome'

const Stack = createStackNavigator()

const AppNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
			<Stack.Screen name="Home" component={DrawerNavigator}/>
			<Stack.Screen name="RecentChat" component={RecentChat} />
			<Stack.Screen name="Chat" component={Chat} />
			<Stack.Screen name="ProfileDetail" component={ProfileDetail} />
			<Stack.Screen name="Schedule" component={Schedule} />
			<Stack.Screen name="SliderScreen" component={SliderScreen} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="Register" component={Register} />
			<Stack.Screen name="Welcome" component={Welcome} />

			<Stack.Screen name="Profilesetup" component={Profilesetup} />
			<Stack.Screen name="ChatList" component={ChatList} />

		</Stack.Navigator>
	)
}

export default AppNavigator
