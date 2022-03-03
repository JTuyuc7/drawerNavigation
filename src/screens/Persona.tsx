import React, { useEffect, useContext } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteStackParams } from '../navigation/MenuPrincipal';
import { AuthContext } from '../context/AuthContext';

//interface RouteParams {
//    id: number;
//    name: string;
//    age: number;
//}

interface Props extends StackScreenProps<RouteStackParams, 'Persona'>{};

const Persona = ({route, navigation}: Props) => {

    const { changeUserName } = useContext(AuthContext);

    useEffect(() => {
        console.log(route.params, ' params aca');
    }, []);
    //console.log(route.params);
    /*
    const params = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    },[]);

    return (
        <>
            <View>
                <Text>Persona: {params.name}</Text>
                <Text>Edad: {params.age}</Text>
            </View>
        </>
    )
    */
    return (
        <SafeAreaView style={{ backgroundColor: 'yellow', flex: 1}}>
            <View>
                <Button
                    title='Go back'
                    onPress={()=> navigation.goBack()}
                />
            </View>
            <View>
                <Text>Persona Aca</Text>

                <Text>Persona: {route.params.name}</Text>
            </View>
            <View>
                <Button 
                    title='Cambiar Username'
                    onPress={ () => changeUserName(route.params.name)}
                />    
            </View>                                             
        </SafeAreaView>
    )
}

export default Persona;