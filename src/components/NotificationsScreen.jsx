import React from "react";
import { View, Text, Button } from "react-native";

export default props=>{
    return(
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>NotificationsScreen </Text>
            <Button
            title="Go back home"
            onPress={()=>props.navigation.goBack()}/>

        </View>
    )
}
