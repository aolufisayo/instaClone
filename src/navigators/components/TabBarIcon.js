import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


const TabBarIcon = (props) => {
    return (
        <Icon
            name={props.name}
            size={26}
            style={{ marginBottom: -3 }}
            color={props.color}
        />
    )
}

export default TabBarIcon;