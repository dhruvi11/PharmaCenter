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
const AdsScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  useEffect(() => {}, []);
  //------------------------------------------------Function Call-----------------------------------------------------------------------

  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
export default AdsScreen;
