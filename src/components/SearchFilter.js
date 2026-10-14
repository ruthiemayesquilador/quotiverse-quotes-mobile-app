import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SearchFilter = ({icon, placeholder}) => {
  return (
    <View style= {{
        backgroundColor: "#f8f8ff",
        flexDirection: "row",
        marginTop: 15,
        paddingVertical: 14,
        borderRadius: 15,
        paddingHorizontal: 14,

        shadowColor: "#000",
        shadowOffset: {width:0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 7,
    }}>
    <FontAwesome name={icon} size={24} color="#ffd700"/>
      <TextInput style={{ paddingLeft:12, fontSize: 14, color:"#000000"}}>{placeholder}</TextInput>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({})