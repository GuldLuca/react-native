import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TabBarIOSItem } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatRoom from './screens/ChatRoom.js';
import User from './screens/User.js';
import Message from './screens/Message.js';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Chat Room"
        onPress={() => navigation.navigate('ChatRoom')}
      />
        <Button
        title="User"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}

function ChatScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Message" component={Message}/>
    </Stack.Navigator>
  )
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}
