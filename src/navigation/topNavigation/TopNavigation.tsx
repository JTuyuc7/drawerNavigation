import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopScreen1 from '../../screens/topScreens/ScreenTop1';
import TopScreen2 from '../../screens/topScreens/ScreenTop2';
import TopScreen3 from '../../screens/topScreens/ScreenTop3';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

const TopNavigation = () => {

    const { top } = useSafeAreaInsets();

    return(
        <TopTab.Navigator
            style={{ paddingTop: top }}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 15, color: 'white' },
                tabBarStyle: {backgroundColor: colores.primary},
                tabBarIndicatorStyle: {
                    backgroundColor: 'white'
                },
            }}
        >
            <TopTab.Screen name='topScreen1' options={{ title: '', tabBarIcon: (props) => <Icon name="gift-outline" size={20} color="white" /> }} component={TopScreen1} />
            <TopTab.Screen name='topScreen2' options={{ title: '', tabBarIcon: (props) => <Icon name="heart-sharp" size={20} color="white" /> }} component={TopScreen2} />
            <TopTab.Screen name='topScreen3' options={{ title: '', tabBarIcon: (props) => <Icon name="image" size={20} color="white" /> }} component={TopScreen3} />
        </TopTab.Navigator>
    )
};

export default TopNavigation;