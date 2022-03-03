import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Screen3 = () => {
    const insets = useSafeAreaInsets();
    return(
        <>
            <View style={{ marginTop: insets.top }}>
                <Text>Screen 3</Text>
            </View>
        </>
    )
}

export default Screen3;