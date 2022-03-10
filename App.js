import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './screens/routes';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>

  );
}
