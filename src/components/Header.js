import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = ({ headerText, headIcon }) => {
  return (
    <View style={{ flexDirection:"row", marginTop: 15}}>
      <Text style={{flex: 1, fontSize: 22, fontWeight:"500"}}>{headerText}</Text>
      <FontAwesome name={headIcon} style={{color:'#ffd700', fontSize: 25}}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})