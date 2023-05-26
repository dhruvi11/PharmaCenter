import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
// Library
import fontFamily from '../constant/Constant';
import Colors from '../../res/colors/Colors';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const TextInput_Image = props => {
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <View>
      <View style={{flexDirection: 'row', marginStart: responsiveWidth(4)}}>
        {props.title === '' ? null : (
          <Text style={[style.textStyle, {}, props.textStyle]}>
            {props.title}
          </Text>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginStart: responsiveWidth(9),
          borderBottomWidth: responsiveWidth(0.3),
          borderBottomColor: 'black',
          width: '80%',
        }}>
        {props.firstIcon === '' ? null : (
          <Image
            source={props.firstIcon}
            style={style.downArraowimageStyle}
            resizeMode="cover"
          />
        )}
        <TextInput
          maxLength={props.maxLength}
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
          <Image
            source={props.rytIcon}
            style={style.checkarrowStyle}
            resizeMode="contain"
          />
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
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.5),
    color: Colors.Red,
    marginStart: responsiveWidth(10),
    marginTop: responsiveWidth(2),
    width: '78%',
  },
  textStyle: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    color: Colors.Black,
    marginStart: responsiveWidth(6),
    marginTop: responsiveWidth(5),
    width: '38%',
  },
  textInput: {
    backgroundColor: Colors.White,
    width: '88%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(1),
    paddingStart: responsiveWidth(4),
    color: Colors.Black,
  },
  downArraowimageStyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignSelf: 'center',
    tintColor: Colors.Black,
    marginTop: responsiveHeight(1),
  },
  checkarrowStyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
});
export default TextInput_Image;
