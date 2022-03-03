import React, { useEffect, useContext } from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext, AuthState, authInitialState } from '../context/AuthContext';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any>{};

const Settings = ( {navigation}: Props) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: true
        })
    }, []);

    const { authState  } = useContext(AuthContext);
    //console.log(authState.favoriteIcon, 'name Icon')

    return(
        <>
            <View style={styles.container}>
                <Text>Settings</Text>

                <Text>{JSON.stringify(authState, null, 4)}</Text>

                <Text>Tu icono es: </Text>
                {
                    authState.favoriteIcon && (
                        <Text>
                            <Icon name={authState.favoriteIcon} size={35} color="red" />
                        </Text>
                    )
                }
            </View>
        </>
    )
}

export default Settings;