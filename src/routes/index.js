import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Login, Splash, Dashboard, Member, Oprek, Kopdar, Donasi, Crm, Pengumuman, Profile, DetailsPengumuman } from '../pages';
import DonasiDetails from '../pages/donasiDetails';


const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName={Dashboard}>
            <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
            <Stack.Screen name="Member" component={Member} options={{ headerShown: false }}/>
            <Stack.Screen name="Oprek" component={Oprek} options={{ headerShown: false }}/>
            <Stack.Screen name="Kopdar" component={Kopdar} options={{ headerShown: false }}/>
            <Stack.Screen name="Donasi" component={Donasi} options={{ headerShown: false }}/>
            <Stack.Screen name="Crm" component={Crm} options={{ headerShown: false }}/>
            <Stack.Screen name="Pengumuman" component={Pengumuman} options={{ headerShown: false }}/>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
            <Stack.Screen name="DonasiDetails" component={DonasiDetails} options={{ headerShown: false }}/>
            <Stack.Screen name="DetailsPengumuman" component={DetailsPengumuman} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default Router;

const styles = StyleSheet.create({})
