import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props {
    name: string;
}

const TouchableIcon = ({name} : Props) => {

    const { changeIcon } = useContext(AuthContext)

    return(
        <>
            <TouchableOpacity
                onPress={() => changeIcon(name)}
            >
                <Icon name={name} size={45} color="green" />
            </TouchableOpacity>
        </>
    )
}

export default TouchableIcon