import React from 'react';
import {Text, View, StyleSheet, Icon} from 'react-native';

function Header1(props){
    return (
        <View style={styles.component}>
            {/* <Icon name="menu" onPress={() => props.navigation.openDrawer()} style={{fontSize:40,paddingTop:80}}></Icon> */}
            <Text style={{fontSize: 25,}}>{props.headerText}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    component: {
        backgroundColor: '#F0F0FF', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 58,
        shadowColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.2,
        elevation: 12,
        position: 'relative'
    }
})

export default Header1;