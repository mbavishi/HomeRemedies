// DropdownMenu.js
import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const DropdownMenu = ({ visible, onClose, onSelect }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableOpacity
        style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', padding: 20, marginTop:20, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onPress={onClose}
      >
        <View style={{ backgroundColor: 'white', padding: 10, borderRadius:5 }}>
          <TouchableOpacity onPress={() => onSelect('Contact')}>
            <Text style={{ padding: 5 }}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSelect('About')}>
            <Text style={{ padding: 5 }}>About</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default DropdownMenu;
