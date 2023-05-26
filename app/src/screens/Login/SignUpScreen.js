import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity,Image} from 'react-native';
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
const SignUpScreen = props => {
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
          <Text style={styles.loginText}>SIGN UP</Text>

          <NetTextInput
            title={'User Name'}
            placeholder={'Enter Your User Name'}
          />
          <NetTextInput
            textStyle={{marginTop: responsiveWidth(-2)}}
            title={'Mobile Number'}
            placeholder={'Enter Your Mobile Number'}
          />
          <NetTextInput
            textStyle={{marginTop: responsiveWidth(-2)}}
            title={'E-Mail Address'}
            placeholder={'Enter Your E-Mail Address'}
          />
          <NetTextInput
            textStyle={{marginTop: responsiveWidth(-2)}}
            title={'Password'}
            placeholder={'Enter Your Password'}
            rytIcon={Images.Hidden}
          />
          <NetButton
            touchableStyle={{marginTop: responsiveWidth(5)}}
            onPress={() => {
              navigation.navigate('OtpScreen');
            }}
            text={'SIGN UP'}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Text style={styles.descriptionText}>
              Do have an Account?
              <Text style={styles.goBackText}>{' LOGIN'}</Text>
            </Text>
          </TouchableOpacity>
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
  goBackText: {
    color: Colors.Blue,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    width: '75%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: responsiveWidth(5),
    textDecorationLine: 'underline',
  },
  passwordText: {
    color: Colors.Blue,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginTop: responsiveWidth(-5),
    alignSelf: 'flex-end',
    marginEnd: responsiveWidth(4),
  },
  orText: {
    color: Colors.Black,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  lineStyle: {
    height: responsiveWidth(0.3),
    backgroundColor: Colors.Black,
    width: '30%',
    marginTop: responsiveWidth(3),
  },
  orView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: responsiveWidth(10),
  },
});
export default SignUpScreen;
