// CustomHeader.js

import React from 'react';
import { View, Text, TouchableOpacity, Modal,StyleSheet } from 'react-native';

const Search = ({ title, onSearch  }) => {
  
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableOpacity
        style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', padding: 20, marginTop:20, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onPress={onClose}
      >
        <View style={{ backgroundColor: 'white', padding: 10, borderRadius:5 }}>
          <TouchableOpacity onPress={() => onSelect('Contact')}>
          <TextInput 
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={onSearch}
      />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
export default Search;


const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    searchBar: {
      flex: 1,
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
  });