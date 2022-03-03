import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const BottomScreen2 = () => {
    useEffect(() => {
        console.log('Tab Bottom Scree effect tab 2');
    },[])
    return(
        <View>
            <Text>Bottom Screen 2</Text>
        </View>
    )
}

export default BottomScreen2;