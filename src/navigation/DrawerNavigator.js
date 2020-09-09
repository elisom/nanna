import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomDrawer from '../components/CustomDrawer'
import Home from '../screens/Home'
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			drawerPosition="right"
			drawerContent={(props) => <CustomDrawer {...props} />}>
			<Drawer.Screen
				options={{
					drawerLabel: 'Home',
				}}
				name="Home"
				component={Home}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigator
