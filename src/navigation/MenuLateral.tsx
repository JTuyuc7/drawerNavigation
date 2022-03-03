import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {

    return(
        <Drawer.Navigator
            initialRouteName='Stack'
        >
            <Drawer.Screen name="Stack" component={StackNavigator} />
            <Drawer.Screen name='Settings' component={Settings} />
        </Drawer.Navigator>
    )
}

export default MenuLateral;