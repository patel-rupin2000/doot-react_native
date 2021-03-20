import React  ,{ useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,TouchableOpacity,Image
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
import ApiKeys from '../../constants';
var firebase = require("firebase");
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { withNavigation } from "react-navigation";
import * as SMS from 'expo-sms';
import AsyncStorage from '@react-native-async-storage/async-storage';
function First(props)  {
  const [isans, setAns] = useState('');
  const [isans1, setAns1] = useState('');
  const [isans2, setAns2] = useState('');
  const [name, setName] = useState('');
  const [uname, setUname] = useState('');
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
      const userData = await AsyncStorage.getItem('userInfo')
      
      
      const transformedData = JSON.parse(userData)
      const { t,email,name,one,two,three} = transformedData
      //const expirationDate = new Date(expiryDate)
      console.log(userData);


    })();
  }, []);

  
  let phone_numbers=[]
  
  const _SOS = async () => {
    
      const userData = await AsyncStorage.getItem('userInfo')
      
      
      const transformedData = JSON.parse(userData)
      const { t,email,name,one,two,three} = transformedData
      const one_= new Date(one)
      const two_= new Date(two)
      const three_= new Date(three)
    

      //if(expirationDate<=new Date() || !token || !userId){
      //  props.navigation.navigate('Auth')
      //  return
      //}
      
        
      
      

      console.log("000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
      
      console.log(one,two,three);
      

   
      //props.navigation.navigate('Home',{data:emailId});
      
      
      
    
  const isAvailable = await SMS.isAvailableAsync();
if (isAvailable) {
  const { result } = await SMS.sendSMSAsync(
    [one,two,three],
    `SOS need help please:

    location:
    https://www.google.co.in/maps/@${location.coords.latitude},${location.coords.longitude},12z
    
    
    coordinates:
    latitude=>${location.coords.latitude},longitude=>${location.coords.longitude} `
    ,
    {
    
    }
  );
}
 else {

}


}




  
  

  
    
    
  



    

 
    

  
  return (
        <Container>

        <ImageBackground source={require("./bg.jpg")} style={styles.image}>
        <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon name="menu" style={{fontSize:40,paddingTop:80}}></Icon>
          </Button>
        <Text style={{fontWeight:"bold",fontSize:25,color:"white",alignSelf:"center",justifyContent:"center"}}>SOS DOOT APP</Text>
        <Body style={{ alignSelf: "center", paddingTop: "40%" }}>
        
 
  
      
        
        <Front />
       
        <TouchableOpacity
        
        onPress={() => _SOS()}
      >
        <Image source={require("../../assets/sos.png")}/>
        
      </TouchableOpacity>
        
      
    
    
         
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
