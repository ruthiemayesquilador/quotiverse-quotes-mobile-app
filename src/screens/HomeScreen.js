import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import  Header  from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchFilter from '../components/SearchFilter';
import QuoteList from '../components/QuoteList';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 11}}>
    {/* render header */}

    <Header headerText={"Quotiverse"} headIcon={"bell"}/>
    
    {/* Seacrh Filter */}
    <SearchFilter icon={"search"} placeholder={"Explore, Engage, and Evolve"}/>


    <View>
      <Text style={{fontSize:20, marginTop: 13, marginBottom: 5, fontWeight:"bold"}}>Quotes of The Day</Text>
    <QuoteList/>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({})