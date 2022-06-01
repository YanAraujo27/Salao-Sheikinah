import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold
} from '@expo-google-fonts/quicksand';

import theme from './src/global/styles/theme';
import { Login } from './src/screens/Login';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, useAuth} from './src/hooks/auth'

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider theme={theme} >
      {/* <StatusBar barStyle="light-content" /> */}
        {/* <AppRoutes /> */}
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}

