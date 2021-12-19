import * as React from 'react';
import { Text, TextInput, Button, View, StyleSheet, Separator, Image } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function CadastroScreen({ navigation }) {
    const pressionaBotao = () => {
    navigation.navigate('Contatos')
  }; 
    const pressionaBotao1 = () => {
    navigation.navigate('Entrar')
  }; 
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}> 
        <Image style={{ height: 130, width: 315}} source={require('../assets/PCDF-Agente.png')}/>
        <Text style={{ paddingHorizontal: 120, fontSize: 15}}>Bem vindo!</Text>
      </View>
      <Text style={styles.paragraph}>Nome:</Text>
      <TextInput style={{ height: 37, borderWidth: 3, borderColor: 'black'}}/>
      <Text style={styles.paragraph}>E-mail:</Text>
      <TextInput keyboardType="email-address" style={{ height: 35, borderWidth: 3, borderColor: 'black'}}/>
      <Text style={styles.paragraph}>Senha:</Text>
      <TextInput  secureTextEntry={true} style={{ marginBottom: 4, height: 35, borderWidth: 3, borderColor: 'black'}}></TextInput>
      <Button style={styles.paragraph} onPress={pressionaBotao} color="red" title="Cadastrar"></Button>
      <Text style={{fontSize: 16}}>Entra na sua conta:</Text>
      <Button style={styles.paragraph} onPress={pressionaBotao1} color="blue" title="entrar"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 3,
    marginBottom: 8,
    margin: 3,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
