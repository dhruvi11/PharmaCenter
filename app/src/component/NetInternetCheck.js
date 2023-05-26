import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LottieView from 'lottie-react-native';
// Component
import Color from '../../../res/colors/Colors';
import Strings from '../../res/strings/Strings';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const NetInternetCheck = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <View>
        <LottieView
          source={require('../../../res/assets/95739-no-connection-to-internet.json')}
          style={style.logoImg}
          autoPlay
        />
        <Text style={style.noInternet}>No Internet Connection</Text>
        <NetButton
          text={Strings.tryAgain}
          touchableStyle={{
            marginTop: responsiveWidth(5),
            alignSelf: 'center',
            width: responsiveWidth(45),
          }}
          linearGradient={{
            width: responsiveWidth(45),
          }}
          onPress={() => {
            getNetInfo;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const style = StyleSheet.create({
  logoImg: {
    height: responsiveScreenWidth(30),
    width: responsiveScreenWidth(30),
    alignSelf: 'center',
    backgroundColor: Color.White,
    borderRadius: responsiveScreenWidth(2),
  },
  noInternet: {
    fontSize: responsiveFontSize(2),
    color: Colors.Black,
    fontFamily: fontFamily.Roboto_Medium,
    marginTop: responsiveWidth(4),
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});

export default NetInternetCheck;
