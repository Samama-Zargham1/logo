import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Splash from './src/Screens/Splash';
import RootNavigation from './src/navigation/RootNavigation';
import {enableLatestRenderer} from 'react-native-maps';


const App = () => {
  const [isSplash, setisSplash] = useState(true)
  useEffect(() => {
    enableLatestRenderer();
    setTimeout(() => {
      setisSplash(false);
    }, 2000);
  }, []);

  return (
    isSplash ? <Splash /> : <RootNavigation/>
  )
}

export default App

const styles = StyleSheet.create({})