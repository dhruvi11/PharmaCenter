import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// Constant files
import Colors from '../../../res/colors/Colors';
import Images from '../../../res/image_constant/Images';
import NetTextInput from '../../component/NetTextInput';
import NetButton from '../../component/NetButton';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const LoginWithNumberScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  useEffect(() => {}, []);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.firstView}></View>
        <View style={styles.secondView}>
          <Text style={styles.loginText}>LOGIN</Text>
          <Text style={styles.descriptionText}>
            Please enter phone Number and We will send you otp
          </Text>
          <NetTextInput
            title={'Phone Number'}
            placeholder={'Enter Your Phone Number'}
          />
          <NetButton
            onPress={() => {
              navigation.navigate('OtpScreen');
            }}
            text={'SEND OTP'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  firstView: {
    height: responsiveWidth(40),
    backgroundColor: Colors.Blue,
    borderBottomLeftRadius: responsiveWidth(20),
    borderBottomRightRadius: responsiveWidth(20),
  },
  secondView: {
    justifyContent: 'center',
    padding: responsiveWidth(5),
  },
  loginText: {
    color: Colors.Black,
    fontSize: responsiveFontSize(3),
    marginTop: responsiveWidth(10),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  descriptionText: {
    color: Colors.Black,
    fontSize: responsiveFontSize(1.8),
    width: '75%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: responsiveWidth(5),
  },
});
export default LoginWithNumberScreen;
