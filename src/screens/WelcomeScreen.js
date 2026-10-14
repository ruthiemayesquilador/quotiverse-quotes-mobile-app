import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        source={require("../../assets/images/BG.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={{ color: "#f8f8ff", fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 90 }}>
          Quotiverse
        </Text>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "900",
            color: "#f8f8ff",
            textAlign: "center",
            marginBottom: 35,
          }}
        >
          Your Universe of Daily Inspiration
        </Text>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              backgroundColor: "#afeeee",
              borderRadius: 17,
              paddingVertical: 18,
              width: "75%",
              alignItems: "center",
              marginTop: 470,
            }}
          >
            <Text style={{
              fontSize: 18,
              color: "#000000",
              fontWeight: "bold",
            }}>
              Let's Explore
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
