import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './routes';
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  )
}

export default App

const styles = StyleSheet.create({})
