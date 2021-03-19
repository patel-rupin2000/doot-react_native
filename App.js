import Stack from './src/navigator/stack';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import First from './src/screen/first';
import React ,{ useState, useEffect, useRef,useCallback, } from "react";

import { View, Image, Alert, Button, StyleSheet, Text ,ImageBackground,TouchableHighlight} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={First} />
//       {/* <Drawer.Screen name="Article" component={Article} /> */}
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

function New(){
  return(
    <View>
      <Text>Hi j h jj</Text>
    </View>
  )
}

export default New;