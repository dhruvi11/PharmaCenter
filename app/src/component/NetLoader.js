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
import Color from '../../res/colors/Colors';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const NetLoader = props=> {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <Modal animationType="slide" transparent={true} visible={props.loader}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: responsiveScreenWidth(2),
            }}>
            <LottieView
              source={require('../../res/assets/99571-loader-colors.json')}
              style={style.logoImg}
              autoPlay
            />
          </View>
        </View>
      </Modal>
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
});

export default NetLoader;
