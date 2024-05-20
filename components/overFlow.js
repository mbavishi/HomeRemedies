import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OverflowMenu = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="ellipsis-vertical" size={24} color="black" marginRight={10}/>
    </TouchableOpacity>
  );
}

export default OverflowMenu;
