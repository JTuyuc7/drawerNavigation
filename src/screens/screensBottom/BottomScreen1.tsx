import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableIcon from '../../components/TouchableIcon';

interface Props extends StackScreenProps<any, any>{};

const BottomScreen1 = ({navigation}: Props) => {
    useEffect(() => {
        console.log('Tab Bottom Scree effect tab 1');
        navigation.setOptions({
            headerShown: true
        })
    },[])
    return(
        <>
            <View style={ styles.container }>
                <Text style={styles.title}>Bottom Screen 1</Text>

                <TouchableIcon name='airplane-outline' />
            
                <TouchableIcon name='arrow-redo-outline' />
                
                <TouchableIcon name='battery-half-sharp' />
                
                <TouchableIcon name='bluetooth-sharp' />
                
                <TouchableIcon name='bicycle-sharp' />
                
                <TouchableIcon name='camera-reverse' />
            </View>
        </>
    )
}

export default BottomScreen1;