import React from 'react'
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

//const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {

    return(
        <Stack.Navigator
            //screenOptions={{
            //    headerStyle: {
            //        backgroundColor: 'white',
            //    },
            //    contentStyle:{
            //        backgroundColor: 'yellow',
            //    }
            //}}
        >
            <Stack.Screen 
                name='Screen1' 
                component={Screen1} 
                //options={
                //    {
                //        headerTitleAlign: 'center',
                //        headerStyle: {
                //            backgroundColor: 'white'
                //        }
                //    }
                //}
            />
            <Stack.Screen 
                name="Screen2" 
                component={Screen2} 

            />
            <Stack.Screen 
                name="Screen3" 
                component={Screen3} 
                //options={{
                //    title: 'Persona',
                //    headerTitleAlign: 'center'
                //}}    
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;