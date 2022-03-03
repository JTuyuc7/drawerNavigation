import 'react-native-gesture-handler';
import React from 'react'
//import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import MenuLateral from './src/navigation/MenuLateral';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import Settings from './src/screens/Settings';
import Screen1 from './src/screens/Screen1';
import MenuLateral from './src/navigation/MenuLateral';
import MenuPrincipal from './src/navigation/MenuPrincipal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, useWindowDimensions, Text, Image, TouchableOpacity } from 'react-native';
import Persona from './src/screens/Persona';
import Screen2 from './src/screens/Screen2';
import StackNavigator from './src/navigation/StackNavigator';
import { styles } from './src/theme/appTheme';
import BottonNavigation from './src/navigation/bottomNavigation/BottomNavigation';
import Icon from 'react-native-vector-icons/AntDesign';
import { AuthProvider } from './src/context/AuthContext';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuInterno = ( {navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Imagen de avatar */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
          }}
          style={ styles.imagenStyle }
        />
      </View>
      {/* Opciones para navegar a otras screens */}

      <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.buttonStyleNav}
            onPress={() => navigation.navigate('Principal')}
            >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textoButtonNav}>Home</Text>
              <Icon name="home" size={25} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonStyleNav}
            onPress={() => navigation.navigate('Servicios')}
            >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textoButtonNav}>Servicios</Text>
              <Icon name="sharealt" size={25} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonStyleNav}
            onPress={() => navigation.navigate('Settings')}
            >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.textoButtonNav}>Settings</Text>
              <Icon name="setting" size={25} color="black" />
            </View>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}

const App = () => {
  const { height, width } = useWindowDimensions();
  return(
    <>
      <NavigationContainer>
        <AppState>
        
          {/*<MenuLateral/>*/}

          {<Drawer.Navigator
            initialRouteName='Principal'
            drawerType={ width >= 650 ? 'permanent' : 'front' }
            //drawerContentOptions={ (props) => <MenuInterno />}
            drawerContent={ (props) => <MenuInterno {...props} />}
          >
            <Drawer.Screen 
              name='Principal' 
              options={{ title: 'Home', headerShown: true}} 
              component={Screen1} 
            />
            <Drawer.Screen name="Servicios" component={BottonNavigation} />
            <Drawer.Screen name='Screen2' component={Screen2} />
            <Drawer.Screen name='Persona' component={Persona} />
            <Drawer.Screen name='Settings' component={Settings} />
          </Drawer.Navigator>}
        </AppState>
      </NavigationContainer>
    </>
  )
}

const AppState = ({children}: any) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;