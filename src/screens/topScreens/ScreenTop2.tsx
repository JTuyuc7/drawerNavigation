import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/appTheme';
import { AuthContext } from '../../context/AuthContext';

const TopScreen2 = () => {

    const { singIn, authState: { isLoggeidIn } } = useContext(AuthContext)

    return(
        <>
            <View style={styles.container}>
                <Text>Top Screen 2</Text>
                <Text>Inicia sesiion</Text>

                { isLoggeidIn ? null : (
                    <Button 
                        title='Inicia Sesion'
                        onPress={ () => singIn()}
                    />
                )}
            </View>
        </>
    )
}

export default TopScreen2;