

import * as WebBrowser from 'expo-web-browser';
import MapView from 'react-native-maps'
import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet,ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import {
  Container,
  Body,
  Content,
  Header,
  FooterTab,
  Icon,
  Title,
  Left,
  Button
  
} from "native-base";

export default function SearchScreen(props) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        console.log(location.coords.latitude)
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      

    }
    
      
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(`https://www.google.co.in/maps/search/hospital/@${location.coords.latitude},${location.coords.longitude},13z/data=!3m1!4b1?hl=en&authuser=0`);
    setResult(result);
  };
  const _1handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(`https://www.google.co.in/maps/search/hotel/@${location.coords.latitude},${location.coords.longitude},13z/data=!3m1!4b1?hl=en&authuser=0`);
    setResult(result);
  };
  const _2handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(`https://www.google.co.in/maps/search/police/@${location.coords.latitude},${location.coords.longitude},13z/data=!3m1!4b1?hl=en&authuser=0`);
    setResult(result);
  };
  return (

    <Container>

    <ImageBackground source={require("./bg.jpg")} style={styles.image}>
    <Button transparent onPress={() => props.navigation.openDrawer()}>
        <Icon name="menu" style={{fontSize:40}}></Icon>
      </Button>
    
    <Body style={{ alignSelf: "center", paddingTop: "40%" }}>
    <Button hasText transparent  onPress={() => _handlePressButtonAsync()} ><Text>Nearest Hospitals</Text></Button>
      <Button hasText transparent  onPress={() => _1handlePressButtonAsync()} ><Text>Nearest Hotel</Text></Button>
      <Button hasText transparent  onPress={() => _2handlePressButtonAsync()} ><Text>Nearest Police Station</Text></Button>
    
  
      
    
  


 
    </Body>
    </ImageBackground>
  </Container>
  );
}
const styles = StyleSheet.create({

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
