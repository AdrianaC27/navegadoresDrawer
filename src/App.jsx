import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import NotificationsScreen from "./components/NotificationsScreen";

const Drawer = createDrawerNavigator();


export default props=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name='Home' component={HomeScreen}/>
                <Drawer.Screen name='Notifications' component={NotificationsScreen}/>

            </Drawer.Navigator>

        </NavigationContainer>
    
    )
}