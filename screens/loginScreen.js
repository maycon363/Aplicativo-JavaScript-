import * as React from 'react';
import { Text, TextInput, Button, View, StyleSheet, Separator,Image } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function LoginScreen({ navigation }) {

    const pressionaBotao = () => {
    navigation.navigate('Contatos')
  }; 
    const pressionaBotao1 = () => {
    navigation.navigate('Cadastro')
  };
  
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={{ height: 130, width: 315}} source={require('../assets/CivilDF-destaque.jpg')}/>
        <Text style={{ paddingHorizontal: 120, fontSize: 15}}>Bem vindo!</Text>
      </View>
      <Text style={styles.paragraph}>E-mail:</Text>
      <TextInput keyboardType="email-address" style={{ height: 35, borderWidth: 3, borderColor: 'black'}}/>
      <Text style={styles.paragraph}>Senha:</Text>
      <TextInput  secureTextEntry={true} style={{ marginBottom: 4, height: 35, borderWidth: 3, borderColor: 'black'}}></TextInput>
      <Button style={styles.paragraph} onPress={pressionaBotao} color="blue" title="Entrar"></Button>
      <Text style={{fontSize: 16}}>fazer uma conta:</Text>
      <Button style={styles.paragraph} onPress={pressionaBotao1} color="red" title="Cadastrar"></Button>
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
    marginBottom: 2,
    margin: 4,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
