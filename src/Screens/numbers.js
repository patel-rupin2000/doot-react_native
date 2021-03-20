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

function change(props){
    const [isans, setAns] = useState('');
    const [isans1, setAns1] = useState('');
    const [isans2, setAns2] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    if (!firebase.apps.length){
        firebase.initializeApp(ApiKeys.FirebaseConfig);
        
      }
const _up = async (a,b,c) => {
    setIsLoading(true)
    

  const userData = await AsyncStorage.getItem('userInfo')
  
  
  const transformedData = JSON.parse(userData)
  const { d_name,email,name,one,two,three} = transformedData

  console.log("000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
  
  console.log(d_name,a,b,c)
firebase.database().ref(`users/${d_name}`).set({
one:a,
two:b,
three:c
}
)
setIsLoading(false)


}
return(
    <Container>

        <ImageBackground source={require("./bg.jpg")} style={styles.image}>
        <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon name="menu" style={{fontSize:40,paddingTop:80}}></Icon>
          </Button>
        <Text style={{fontWeight:"bold",fontSize:25,color:"white",alignSelf:"center",justifyContent:"center"}}>SOS DOOT APP</Text>
        <Body style={{ alignSelf: "center", paddingTop: "40%" }}>


        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setAns(text)}
        value={isans}
      />
              <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setAns1(text)}
        value={isans1}
      />
              <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setAns2(text)}
        value={isans2}
      />
 
  
      <Button hasText   onPress={() =>_up(isans,isans1,isans2)} ><Text>SET PHONE NUMBERS</Text></Button>
        
    
       
       
        
      
    
    
         
    <Text style={{color:"white",fontSize:16}}></Text>
        </Body>
        </ImageBackground>
      </Container>

)}
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
  
export default change;