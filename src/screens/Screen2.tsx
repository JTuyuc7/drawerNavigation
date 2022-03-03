import React, { useEffect, useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';
import { RouteStackParams } from '../navigation/MenuPrincipal';

interface Props extends StackScreenProps<RouteStackParams, 'Persona'>{};
const Screen2 = ( {route, navigation}: Props) => {

    const { changeUserName } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true
        })
    },[])

    return(
        <>
            <View style={ styles.container }>
                <Text>Screen 2</Text>

                <Button
                    title='Cambiar Nombre'
                    onPress={() => changeUserName(route.params.name)}
                />
            </View>
        </>
    )
}

export default Screen2;