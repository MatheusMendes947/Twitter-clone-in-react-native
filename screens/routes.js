import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Entypo } from '@expo/vector-icons'; 

import Home from './home';
import Search from './search';
import Mensages from './mensages';
import Notifications from './notifications';

// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// size = 

export default function Routes() {
  return (
      <Tab.Navigator
      screenOptions={{
            tabBarStyle: {
                        backgroundColor:'#121212'
            },
            tabBarShowLabel: false,
            // headerShown: false,
            // borderTopcollor: 'transparent',
            tabBarActiveTintColor: '#FFFF',
            tabBarBadgeStyle: '#121212',
          }}
      
      >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{tabBarIcon:({size, color})=>(
            <Entypo name="home" size={size} color={color} />
        )
      
      }}
        />

        <Tab.Screen 
        name="Search" 
        component={Search} 
        />

        <Tab.Screen 
        name="Notifications" 
        component={Notifications} 
        />

        <Tab.Screen 
        name="Mensages"
        component={Mensages} 
        />

      </Tab.Navigator>
  );
}
