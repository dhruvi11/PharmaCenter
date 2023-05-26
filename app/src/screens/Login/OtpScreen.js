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
const OtpScreen = props => {
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
          <Text style={styles.descriptionText}>
            Please enter phone Number and We will send you otp
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '75%'}}>
              <NetTextInput placeholder={'Enter Your Phone Number'} />
            </View>
            <View style={{width: '20%', justifyContent: 'center'}}>
              <NetButton touchableStyle={styles.editBtn} text={'EDIT'} />
            </View>
          </View>
          <Text style={styles.otpText}>ENTER OTP</Text>
          <View style={styles.otpView}>
            <View style={{width: '15%'}}>
              <NetTextInput
                textInput={styles.textInpuStyle}
                borderColor={styles.textInpuStyle}
              />
            </View>
            <View style={{width: '15%'}}>
              <NetTextInput
                textInput={styles.textInpuStyle}
                borderColor={styles.textInpuStyle}
              />
            </View>
            <View style={{width: '15%'}}>
              <NetTextInput
                textInput={styles.textInpuStyle}
                borderColor={styles.textInpuStyle}
              />
            </View>
            <View style={{width: '15%'}}>
              <NetTextInput
                textInput={styles.textInpuStyle}
                borderColor={styles.textInpuStyle}
              />
            </View>
          </View>
          <NetButton
            onPress={() => {
              navigation.navigate('VerifyOtpScreen');
            }}
            text={'CONFIRM'}
          />
          <Text style={styles.goBackText}>GO BACK</Text>
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
  otpText: {
    color: Colors.Black,
    fontSize: responsiveFontSize(2),
    marginTop: responsiveWidth(5),
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
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    width: '75%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: responsiveWidth(5),
    textDecorationLine: 'underline',
  },
  editBtn: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: responsiveWidth(2),
    height: responsiveWidth(11),
    marginTop: responsiveWidth(5),
  },
  otpView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveWidth(-5),
  },
  textInpuStyle: {width: responsiveWidth(10)},
});
export default OtpScreen;
