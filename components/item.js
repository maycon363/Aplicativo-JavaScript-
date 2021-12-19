import React from 'react';
import { Text, StyleSheet, View, Image, Button, Alert } from 'react-native';

import { Avatar, Icon, ListItem } from 'react-native-elements';

export default function Item(props) {
  return (
    <View style={styles.item}>
      <Image
        style={{ height: 37, width: 38 }}
        source={require('../assets/images.png')}
      />
      <Text style={{ paddingLeft: 6 }}>{props.item.nome}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    borderBottomWidth: 3,
  }
});
