import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UseCheckInternetConnection} from '@shared/Hooks/UseCheckInternetConnection';
import ConnectionLostSnackBar from '@shared/Components/ConnectionLostSnackBar';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tasks from '@screens/Home/Tasks';
import {TASKS} from './routes';

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  const {isConnected} = UseCheckInternetConnection();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: 'Task Management',
        }}>
        <Stack.Screen name={TASKS} component={Tasks} />
      </Stack.Navigator>
      {isConnected || isConnected === null ? null : <ConnectionLostSnackBar />}
    </NavigationContainer>
  );
};

export default MainNavigator;
