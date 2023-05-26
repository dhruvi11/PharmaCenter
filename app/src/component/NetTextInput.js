import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text, TextInput,TouchableOpacity, Image} from 'react-native';
// Library
import Colors from '../../res/colors/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const NetTextInput = props => {
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {props.title === '' ? null : (
          <Text style={[style.textStyle, {}, props.textStyle]}>
            {props.title}
          </Text>
        )}
      </View>
      <View style={[style.borderColor, {}, props.borderColor]}>
        <TextInput
          keyboardType={props.keyboardType}
          onSubmit={() => ref.onSubmit}
          ref={props.ref}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.Darkgray}
          value={props.value}
          onChangeText={props.onChangeText}
          style={[
            style.textInput,
            {
              marginTop:
                props.title === '' ? responsiveWidth(0) : responsiveWidth(1.5),
              borderColor: props.error === '' ? Colors.Darkgray : Colors.Red,
            },
            props.textInput,
          ]}
        />
        {props.rytIcon === '' ? null : (
          <TouchableOpacity onPress={props.passwordClick}>
          <Image
            source={props.rytIcon}
            style={style.downArraowimageStyle}
            resizeMode="contain"
          />
          </TouchableOpacity>
        )}
      </View>
      {props.error === '' ? null : (
        <Text
          numberOfLines={1}
          style={[style.errorStyle, {}, props.errorStyle]}>
          {props.error}
        </Text>
      )}
    </View>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const style = StyleSheet.create({
  errorStyle: {
    // fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.5),
    color: Colors.Red,
    marginStart: responsiveWidth(10),
    marginTop: responsiveWidth(2),
    width: '78%',
  },
  textStyle: {
    // fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    color: Colors.Black,
    marginStart: responsiveWidth(6),
    marginTop: responsiveWidth(5),
    width: '38%',
  },
  textInput: {
    borderRadius: responsiveWidth(2),
    backgroundColor: Colors.Lightgray,
    width: '100%',
    borderRadius: responsiveWidth(1),
    paddingStart: responsiveWidth(3),
    height:responsiveWidth(10),
  },
  downArraowimageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.Black,
    marginTop: responsiveHeight(2),
    marginStart:responsiveWidth(-8)
  },
  borderColor: {
    flexDirection: 'row',
    marginStart: responsiveWidth(5),
    width: '90%',
    marginTop: responsiveWidth(2),
    borderRadius: responsiveWidth(2),
    backgroundColor: Colors.Lightgray,
  },
});
export default NetTextInput;
