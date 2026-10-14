import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, quotesList } from '../Constants';

const QuoteList = () => {
  return (
    <View>
      <FlatList 
      data={quotesList}
      renderItem={({ item })=> (
      <View style={{ 
        backgroundColor: colors.COLOR_BLUE,
        shadowColor: "#000",
        shadowOffset: {width:0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 15,
        alignItems:"center",
        paddingVertical: 8,
        paddingHorizontal: 9,

        }}>

<Image source={item.image} style={{width:160, height:160, resizeMode:"cover"}}/>
        <Text>{item.name}</Text>
      </View>
      )}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent:"space-between",  
      }}
      showsVerticalScrollIndicator={false}
    />
    </View>
  
  );
};

export default QuoteList

const styles = StyleSheet.create({})