import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../theme/appTheme';

const TopScreen3 = () => {

    const { logOut, authState: { isLoggeidIn } } = useContext(AuthContext)

    return(
        <>
            <View style={ styles.container}>
                <Text>Top Screen 3</Text>

                {
                    isLoggeidIn === false ? null : (
                        <Button 
                            title='Cerrar Sesion'
                            onPress={ () => logOut() }
                        />
                    )
                }
            </View>
        </>
    )
}

export default TopScreen3;