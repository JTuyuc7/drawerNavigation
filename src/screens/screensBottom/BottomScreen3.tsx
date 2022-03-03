import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const BottomScreen3 = () => {
    useEffect(() => {
        console.log('Tab Bottom Scree effect tab 3');
    },[])

    return(
        <View>
            <Text>Bottom Screen 3</Text>
        </View>
    )
}

export default BottomScreen3;