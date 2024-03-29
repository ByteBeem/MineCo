import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from "./screens/Welcome/Welcome";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      </Stack.Navigator>
    
    </NavigationContainer>
    
  );
}
