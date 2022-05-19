import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import Loading from './components/pages/auth/Login';
import Sign from './components/pages/auth/Sign';
import Messages from './components/pages/Messages';
import colors from './styles/colors';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {showMessage} from 'react-native-flash-message';

const Stack = createStackNavigator();

const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Loading} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? ( // user yoksa giriş ekranına yönlendirme işlemi
        <AuthStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="MessagesScreen"
            component={Messages}
            options={{
              title: 'Dertler',
              headerTintColor: colors.darkgreen,
              headerTitleAlign: 'center',
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={colors.darkgreen}
                  onPress={() => auth().signOut()}></Icon>
              ),
            }}
          />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};
export default App;
