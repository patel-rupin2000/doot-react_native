import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import {View, Text, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

function Front(){
    const [state,setState]=useState({country: 'uk'});
    const [selectedValue, setSelectedValue] = useState("java");
    options=[
        {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
        {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
    ];
    return (
        <View style={{height: 50, justifyContent: 'center', alignItems: 'center', }}>
            <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Ms" value="ms" />
        <Picker.Item label="Java" value="java1" />
        <Picker.Item label="JavaScript" value="js1" />
        <Picker.Item label="Ms" value="ms1" />
        <Picker.Item label="Java" value="java2" />
        <Picker.Item label="JavaScript" value="js2" />
        <Picker.Item label="Ms" value="ms2" />
        <Picker.Item label="Java" value="java212" />
        <Picker.Item label="JavaScript" value="js221" />
        <Picker.Item label="Ms" value="ms122" />
        <Picker.Item label="Java" value="jav2a" />
        <Picker.Item label="JavaScript" value="j2s2" />
        <Picker.Item label="Ms" value="m2s" />
        <Picker.Item label="Java" value="jav2a1" />
        <Picker.Item label="JavaScript" value="js21" />
        <Picker.Item label="Ms" value="ms21" />
        <Picker.Item label="Java" value="ja2va2" />
        <Picker.Item label="JavaScript" value="js22" />
        <Picker.Item label="Ms" value="ms22" />
        <Picker.Item label="Java" value="java212" />
        <Picker.Item label="JavaScript" value="js221" />
        <Picker.Item label="Ms" value="ms122" />
      </Picker>
        </View>
    )
}

export default Front;