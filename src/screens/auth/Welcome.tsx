import { useNavigation} from "@react-navigation/native";
import React, { useState} from "react"; 
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import { hp, wp } from "../../utils/dimension";
import LinearGradient from "react-native-linear-gradient";
import ImageCarousel from '../components/ImageCarousel';

const Welcome: React.FC = () => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const irctcLogoSource = currentCarouselIndex % 2 === 0
    ? require('../../assets/logo-white.png') 
    : require('../../assets/logo-dark.png'); 
  return (
    <View style={style.parent}>
      <View style={style.bgContainer}>
        <ImageCarousel onIndexChange={setCurrentCarouselIndex} /> 
        <LinearGradient
          colors={['transparent', '#000000']}
          style={style.gradientOverlay}
        />
        <Image source={irctcLogoSource} style={style.irctcLogo} /> 
      </View>
      <View style={style.contentContainer}>
        <Text style={style.titleText}>Next Generation eTicketing System</Text>
        <Text style={style.subText}>Now with improved user experience</Text>
        <TouchableOpacity style={style.loginButton} onPress={() => navigation.navigate(AppRoutes.Login)}>
          <Text style={style.loginText}>Log in with IRCTC account</Text>
        </TouchableOpacity>
        <Text style={style.subText}>Don’t have an account yet? <Text style={{ color: 'white', textDecorationLine: 'underline' }} onPress={()=> navigation.navigate(AppRoutes.SignUp)}>Sign up</Text></Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#000',
  },
  bgContainer: {
    flex: 2,
    width: '100%',
    position: 'relative', 
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
  },
  irctcLogo: {
    position: 'absolute',
    top: hp(7),
    alignSelf: 'center', 
    width: wp(15),
    height: hp(7),
    resizeMode: 'contain', 
    zIndex: 1, 
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  titleText: {
    color: 'white',
    fontSize: wp(9),
    alignSelf: "center",
    textAlign: "center",
    lineHeight:hp(5),
    fontFamily: 'NataSans-Medium',
  },
  subText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3.5),
    color: '#ADADAD',
    marginVertical: hp(1.3),
  },
  loginButton: {
    width: wp(80),
    height: hp(7),
    backgroundColor: '#2475EE',
    justifyContent: 'center',
    borderRadius: 14,
    paddingVertical: hp(1.3),
    marginVertical: hp(0.6),
  },
  loginText: {
    fontFamily: 'NataSans-Bold',
    color: '#fff',
    fontSize: wp(4),
    alignSelf: 'center',
  },
});
export default Welcome;