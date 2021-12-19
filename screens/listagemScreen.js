import React from 'react';
import { FlatList, StyleSheet, View, Text, Avatar } from 'react-native';
import { Header, Icon } from 'react-native-elements';

import Item from '../components/item';

export default function ListaScreen({ navigation }) {
  const dados = [
    { id: '1', nome: 'Lucas Lima'},
    { id: '2', nome: 'Juninho Borges '},
    { id: '3', nome: 'Jean Vieira'},
    { id: '4', nome: 'Silva'},
    { id: '5', nome: 'Lucas Vieira'},
    { id: '6', nome: 'LucasMota'},
    { id: '7', nome: 'Gustavo Pereira'},
    { id: '8', nome: 'Pontes da Silva'},
    { id: '9', nome: 'Guilherme Lima'},
    { id: '10', nome: 'Marcos Lima '},
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.lista}>
        <FlatList
          data={dados}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  lista: {
    flex: 8,
  },
});
