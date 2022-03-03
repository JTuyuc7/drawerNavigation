import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Persona from '../screens/Persona';

export type RouteStackParams = {
    Screen1: undefined,
    Screen2: { name: string, age: number, id: number},
    Screen3: undefined,
    Persona: { name: string, age: number, id: number}
}

const Stack = createNativeStackNavigator();

const MenuPrincipal = () => {

    return(
        <Stack.Navigator
            //initialRouteName='pagina1'
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'white',
                },
                contentStyle:{
                    backgroundColor: 'yellow',
                }
            }}
        >
            <Stack.Screen 
                name='Screen1' 
                component={Screen1}
                key={'Screen1'}
                options={
                    {
                        headerTitleAlign: 'center',
                        title: 'Home',
                        headerLargeTitle: false,
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                    }
                }
            />
            <Stack.Screen 
                name='Screen2' 
                component={Screen2} 
                key={'Screen2'}
                options={{
                    title: 'Pagina 2',
                    headerTitleAlign: 'center',
                    headerBackTitle: 'Back',
                    //headerBackVisible: false
                }}
            />

            <Stack.Screen 
                name='Screen3' 
                component={Screen3}
                key={'Screen3'}
            />

            <Stack.Screen 
                name='Persona'
                key={'Persona'}
                component={Persona}
                options={{
                    title:'Persona',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}

export default MenuPrincipal;