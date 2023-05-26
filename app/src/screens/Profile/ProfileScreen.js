import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
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
const ProfileScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [avatar, setAvatar] = useState('');
  const [filePath, setFilePath] = useState({});

  useEffect(() => {}, []);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  // const chooseFile = type => {
  //   let options = {
  //     mediaType: type,
  //     maxWidth: 300,
  //     maxHeight: 550,
  //     quality: 1,
  //   };
  //   launchImageLibrary(options, response => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       alert('User cancelled camera picker');
  //       return;
  //     } else if (response.errorCode == 'camera_unavailable') {
  //       alert('Camera not available on device');
  //       return;
  //     } else if (response.errorCode == 'permission') {
  //       alert('Permission not satisfied');
  //       return;
  //     } else if (response.errorCode == 'others') {
  //       alert(response.errorMessage);
  //       return;
  //     }
  //     console.log('base64 -> ', JSON.stringify(response));
  //     console.log('uri -> ', response.assets[0].uri);
  //     console.log('width -> ', response.width);
  //     console.log('height -> ', response.height);
  //     console.log('fileSize -> ', response.fileSize);
  //     console.log('type -> ', response.type);
  //     console.log('fileName -> ', response.fileName);
  //     setFilePath(response.assets[0].uri);
  //   });
  // };

  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            source={Images.Splash}
            PlaceholderContent={<ActivityIndicator />}
            style={styles.imageView}
          />
        </View>
        <TouchableOpacity>
          <Image source={Images.Camera} style={styles.cameraImg} />
        </TouchableOpacity>
        <NetTextInput
          title={'First Name'}
          placeholder={'Enter Your First Name'}
        />
        <NetTextInput
          textStyle={{marginTop: responsiveWidth(-2)}}
          title={'Last Name'}
          placeholder={'Enter Your Last Name'}
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

        <NetButton
          touchableStyle={{marginTop: responsiveWidth(5), width: '90%'}}
          onPress={() => {
            navigation.navigate('OtpScreen');
          }}
          text={'SAVE CHANGES'}
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
    padding: responsiveWidth(3),
  },
  imageView: {
    height: responsiveWidth(25),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(25),
    alignSelf: 'center',
    tintColor: Colors.Lightgray,
  },
  cameraImg: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignSelf: 'center',
    marginTop: responsiveWidth(-5),
    marginStart: responsiveWidth(15),
  },
});
export default ProfileScreen;
