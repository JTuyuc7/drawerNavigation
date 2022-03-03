import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomScreen1 from '../../screens/screensBottom/BottomScreen1';
import BottomScreen2 from '../../screens/screensBottom/BottomScreen2';
import BottomScreen3 from '../../screens/screensBottom/BottomScreen3';
import { colores, styles } from '../../theme/appTheme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TopNavigation from '../topNavigation/TopNavigation';
import Icono from 'react-native-vector-icons/Ionicons';
//import StackNavigator from '../StackNavigator';


const BottomNavigation = () => {
    return Platform.OS === 'ios'
        ? <BottomNavigationIOS />
        : <TabBottomAndroid />
}


const TabAndroid = createMaterialBottomTabNavigator();
const TabBottomAndroid = () => {
    return(
        <TabAndroid.Navigator
            sceneAnimationEnabled={true}
            activeColor='white'
            barStyle={{ backgroundColor: colores.primary }}
        >
            <TabAndroid.Screen name="bottomScreenA1" options={{ title: 'And 1', tabBarIcon: (props) => <Icono name="desktop-outline" size={15} color="white" />}} component={BottomScreen1} />
            <TabAndroid.Screen name="bottomScreenA2" options={{ title: 'And 2', tabBarIcon: (props) => <Icono name="earth-outline" size={15} color="white" />}} component={TopNavigation} />
            <TabAndroid.Screen name="bottomScreenA3" options={{ title: 'And 3', tabBarIcon: (props) => <Icono name="fast-food" size={15} color="white" />}} component={BottomScreen3} />
        </TabAndroid.Navigator>
    )
}

const TabIOS = createBottomTabNavigator();
const BottomNavigationIOS = () => {
    return(
        <>
            <TabIOS.Navigator
                screenOptions={ ({ route }) => ({
                    tabBarActiveTintColor: colores.primary,
                    tabBarStyle: {
                        borderTopColor: colores.primary,
                        borderTopWidth: 0,
                        elevation: 0
                    },
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold'
                    },
                })}
                sceneContainerStyle={{
                    backgroundColor: 'white'
                }}
                
            >
                {/*<Tab.Screen name='bottomScreen1' options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: props.color }}>Ic</Text>}} component={BottomScreen1} />*/}
                <TabIOS.Screen name='bottomScreen1' options={{ title: 'Tab 1', tabBarIcon: (props) => <Icono name="desktop-outline" size={15} color="white" />}} component={BottomScreen1} />
                <TabIOS.Screen name='bottomScreen2' options={{ title: 'Tab 2', tabBarIcon: (props) => <Icono name="earth-outline" size={15} color="white" /> }} component={TopNavigation} />
                <TabIOS.Screen name="bottomScreen3" options={{ title: 'Tab 3', tabBarIcon: (props) => <Icono name="fast-food" size={15} color="white" /> }} component={BottomScreen3} />
            </TabIOS.Navigator>
        </>
    )
};

export default BottomNavigation;
