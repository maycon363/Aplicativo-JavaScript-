import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/loginScreen';
import CadastroScreen from './screens/cadastroScreen';
import ListaScreen from './screens/listagemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="Entrar" style={{
          fontWeight: "bold" }} component={LoginScreen} 
          options={{headerShown: false}} />
        <Stack.Screen name="Contatos" component={ListaScreen} 
        options={{headerStyle: { backgroundColor: 'dodgerblue' }, 
        headerTitleStyle: { color: 'white' },
        }}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 


