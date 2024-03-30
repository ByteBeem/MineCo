import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from "./screens/Welcome/Welcome";
import SignUp from "./screens/Signup/Signup";
import Reset from "./screens/Reset/Reset";
import Verify from "./screens/Verification/verify";
import Login from "./screens/Login/Login";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Verify" component={Verify} options={{ headerShown: false }} />
      <Stack.Screen name="Reset" component={Reset} options={{ headerShown: false }} />
      </Stack.Navigator>
    
    </NavigationContainer>
    
  );
}
