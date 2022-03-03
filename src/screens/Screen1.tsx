
import React, { useEffect } from 'react';
//import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

//interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

const Screen1 = ({navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            //headerLeft: () => (
            //    <Button
            //        title='Menu'
            //        onPress={() => navigation.toggleDrawer()}
            //    />
            //)
            headerTitleAlign: 'center',
            headerRight: () => (
                <Text>Not</Text>
            )
        })
    }, [])

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Pagina 1 Screen</Text>

                <Button 
                    onPress={() => navigation.navigate('Screen1')}
                    title="Next Page"
                />


                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity
                        style={styles.botonStyle}
                        onPress={ () => navigation.navigate('Persona', {name: 'James', age: '24', id: 1})}
                    >
                        <Text style={styles.textButton}>Persona 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botonStyle}
                        onPress={ () => navigation.navigate('Screen2', {name: 'Sheldon', age: '40', id: 1})}
                    >
                        <Text style={styles.textButton}>Pantalla 2</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Screen1;