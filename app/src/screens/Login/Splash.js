import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// Constant files
import Colors from '../../../res/colors/Colors';
import Images from '../../../res/image_constant/Images';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const Splash = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  useEffect(() => {
    setTimer();
  }, [setTimer]);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const setTimer = () => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={Images.Splash}
          style={styles.logoImg}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
  },
  logoImg: {
    height: '110%',
    width: '110%',
    alignSelf: 'center',
    backgroundColor: Colors.White,
  },
});
export default Splash;
