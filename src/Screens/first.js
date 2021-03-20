import React  ,{ useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';
import * as Location from 'expo-location';
import Front from '../components/front';
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
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { withNavigation } from "react-navigation";
import * as SMS from 'expo-sms';
function First(props)  {
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
  
  const _SOS = async () => {
  const isAvailable = await SMS.isAvailableAsync();
if (isAvailable) {
  const { result } = await SMS.sendSMSAsync(
    ['7069490002', '7217750348'],
    `SOS need help please:

    location:
    https://www.google.co.in/maps/@${location.coords.latitude},${location.coords.longitude},12z
    
    
    coordinates:
    latitude=>${location.coords.latitude},longitude=>${location.coords.longitude} `
    ,
    {
    
    }
  );
} else {
  // misfortune... there's no SMS available on this device
}}
  return (
        <Container>

        <ImageBackground source={require("./bg.jpg")} style={styles.image}>
        <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon name="menu" style={{fontSize:40,paddingTop:80}}></Icon>
          </Button>
        <Text style={{fontWeight:"bold",fontSize:25,color:"white",alignSelf:"center",justifyContent:"center"}}>SOS DOOT APP</Text>
        <Body style={{ alignSelf: "center", paddingTop: "40%" }}>
        
        <Front />
        <Button hasText transparent  onPress={() => _SOS()} ><Text>Send SOS</Text></Button>
          
        
      
    
    
         
    <Text style={{color:"white",fontSize:16}}></Text>
        </Body>
        </ImageBackground>
      </Container>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color: 'blue'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default First;
