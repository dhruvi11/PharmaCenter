import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
// Library
import Colors from '../../res/colors/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const NetButton = props => {
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={[style.touchableStyle, props.touchableStyle, {}]}>        
          <Text style={[style.textStyle, props.textStyle, {}]}>
            {props.text}
          </Text>
      </TouchableOpacity>
    </View>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const style = StyleSheet.create({
  touchableStyle: {
    backgroundColor: Colors.Blue,
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(8),
    justifyContent: 'center',
    alignSelf:'center',
    marginTop: responsiveHeight(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  linearGradient: {
    width: responsiveWidth(72),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(8),
    justifyContent: 'center',
  },
  textStyle: {
    // fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    color: Colors.White,
    alignSelf: 'center',
  },
});
export default NetButton;
