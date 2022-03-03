import 'react-native-gesture-handler';
import React from 'react'
//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import MenuLateral from './src/navigation/MenuLateral';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import Screen1 from '../screens/Screen1';
import MenuLateral from './MenuLateral';
import MenuPrincipal from './MenuPrincipal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, useWindowDimensions } from 'react-native';
import Persona from '../screens/Persona';
import Screen2 from '../screens/Screen2';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {

  const { height, width } = useWindowDimensions();
  return(
    <>
      <NavigationContainer>
        
        {/*<MenuLateral/>*/}

        {<Drawer.Navigator
          initialRouteName='Principal'
          drawerType={ width >= 650 ? 'permanent' : 'front' }
        >
          <Drawer.Screen 
            name='Principal' 
            options={{ title: 'Home', headerShown: true}} 
            component={Screen1} 
          />
          <Drawer.Screen name='Screen2' component={Screen2} />
          <Drawer.Screen name='Persona' component={Persona} />
          <Drawer.Screen name='Settings' component={Settings} />
        </Drawer.Navigator>}
      </NavigationContainer>
    </>
  )
}
// gbellen.rrjj@gmail.com
export default App;