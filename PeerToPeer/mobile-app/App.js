/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import HomeScreen from './android/src/screens/HomeScreen'
import UploadVideoScreen from './android/src/screens/UploadVideoScreen'
import ViewVideoScreen from './android/src/screens/ViewVideoScreen'
import ViewaudioTranscript from './android/src/screens/ViewaudioTranscript'
import UploadImageScreen from './android/src/screens/UploadImageScreen'
import ViewImageScreen from './android/src/screens/ViewImageScreen'
import {DrawerContent} from './android/src/screens/DrawerContent'

import { 
  NavigationContainer, 

} from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (

    <NavigationContainer>
      {   <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Upload Video/Audio" component={UploadVideoScreen} />
          <Drawer.Screen name="View Video" component={ViewVideoScreen} />
          <Drawer.Screen name="View Audio Transcript" component={ViewaudioTranscript} />
          <Drawer.Screen name="Upload Images" component={UploadImageScreen} />
          <Drawer.Screen name="View Images" component={ViewImageScreen} />
         </Drawer.Navigator>

      }
    </NavigationContainer>

  )
}

export default App;
