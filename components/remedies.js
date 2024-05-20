import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from './layout';
import OverflowMenu from './overFlow';
import DropdownMenu from './dropDownMenu';

export default function Remedies({ route }) {
  const { remedies } = route.params;
  console.log(remedies.name);

  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: remedies.name,
      headerRight: () => (
        <OverflowMenu onPress={() =>  setDropdownVisible(true)} />
      ),
    });
  }, []);

  const handleSelect = (option) => {
    if (option === 'Contact') {
      navigation.navigate('Contact');
    } else if (option === 'About') {
      navigation.navigate('About');
    }
    setDropdownVisible(false);
  }


  return (
    <Layout>
      <FlatList
        data={remedies.remedies}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.listIcon}>
              <Text></Text>
            </View>
            <View style={styles.remedyContainer}>
              <Text style={styles.remedy}>{item}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <DropdownMenu visible={dropdownVisible} onClose={() => setDropdownVisible(false)} onSelect={handleSelect} />
    </Layout>
  )
}
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
    borderRadius:5,
    padding:5
  },
  listIcon: {
    marginRight: 5,
  },
  remedyContainer: {
    flex: 1,
  },
  remedy: {
    fontSize: 15
  },
});
