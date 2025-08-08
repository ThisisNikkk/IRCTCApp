import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, ActivityIndicator, Pressable, TextInput, Image, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../utils/dimension';
import AppRoutes from '../../routes/RouteKeys/appRoutes';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/Reducers/userData';

interface LoginProps {
    navigation: any,
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const image = require('../../assets/Vector.png');
    const bg = require('../../assets/Subtract.png');
    const googlelogo = require('../../assets/google.png')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.parent}>
                <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.backgroundImage}
                />
                <View style={styles.contentContainer}>
                    <ImageBackground source={bg} style={styles.loginFormBackground} >
                        <Text style={styles.title}>
                            <Text style={styles.titleBold}>Welcome to IRCTC{'\n'} </Text>
                            <Text style={styles.titleNormal}>Next Generation eTicketing System</Text>
                        </Text>
                        <View style={styles.loginFormContent}>
                            {errorMessage ? (
                                <Text style={styles.errorText}>{errorMessage}</Text>
                            ) : null}
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="#fff"
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                editable={!loading}
                            />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#fff"
                                secureTextEntry
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                editable={!loading}
                            />
                            <View style={styles.buttonContainer}>
                                <Pressable
                                    style={styles.loginButton}
                                    onPress={() => dispatch(setAuth(true))}
                                >
                                    {loading ? (
                                        <ActivityIndicator color="#fff" />
                                    ) : (
                                        <Text style={styles.loginButtonText}>Login</Text>
                                    )}
                                </Pressable>
                            </View>
                            <View>
                                <Pressable
                                    style={styles.BackButton}
                                    onPress={() => navigation.goBack()}
                                >
                                    <Image source={googlelogo} style={styles.googleLogo} />
                                    <Text style={styles.BackButtonText}>Continue With Google</Text>
                                </Pressable>
                            </View>
                            <View style={styles.forgotPassContainer}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ForgotPasswordPage")}
                                >
                                    <Text style={styles.forgotPassText}>Forgot Password? <Text style={{ textDecorationLine: 'underline' }}>Click Here</Text></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.copyrightContainer}>
                                <Text style={styles.copyrightText}>Copyright © Nikhil Siwan.</Text>
                                <Text style={styles.copyrightText}>All Rights Reserved.</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.dividerContainer}>
                    <View style={styles.dottedLine} />
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'black',
    },
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: wp(4.5),
    },
    loginFormBackground: {
        width: "100%",
        height: hp(75),
        maxWidth: 400,
        opacity: 1,
        borderRadius: 25,
        overflow: 'hidden',
    },
    loginFormContent: {
        padding: hp(2),
    },
    title: {
        color: "white",
        textAlign: "center",
        marginVertical: hp(2),
    },
    titleBold: {
        fontSize: wp(7),
        fontFamily: "NataSans-Bold",
    },
    titleNormal: {
        fontSize: wp(4),
        fontFamily: "Montserrat-Medium",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "center",
    },
    input: {
        height: hp(6.5),
        marginVertical: hp(1.5),
        paddingHorizontal: wp(4),
        borderRadius: 20,
        backgroundColor: "#626978ff",
        color: "white",
        fontFamily: "Montserrat-Regular",
    },
    loginButton: {
        marginTop: hp(4),
        paddingVertical: hp(2),
        paddingHorizontal: wp(32.5),
        borderRadius: 16,
        alignSelf: "center",
        backgroundColor: "#2475EE",

    },
    BackButton: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: hp(2),
        paddingVertical: hp(2),
        paddingHorizontal: wp(16),
        borderRadius: 16,
        backgroundColor: "white",
        alignItems: "center",
        marginHorizontal: wp(3.75)
    },
    loginButtonText: {
        color: "white",
        fontSize: wp(3.5),
        fontFamily: "NataSans-Bold",
        textAlign: "center",
    },
    BackButtonText: {
        color: "#000",
        fontFamily: "NataSans-Bold",
        fontSize: wp(3.5),
    },
    errorText: {
        color: "white",
        textAlign: "center",
        marginBottom: hp(1.5),
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold'
    },
    dividerContainer: {
        position: 'absolute',
        top: '28.5%',
        left: wp(5),
        right: wp(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp(7),
    },
    dottedLine: {
        flex: 1,
        height: 1,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderStyle: 'dashed',
    },
    googleLogo: {
        resizeMode: 'contain',
        height: 20,
        width: 20,
        right: 20,
    },
    copyrightContainer: {
        marginVertical: 20,
        marginBottom: Platform.OS === "android" ? 10 : 20,
        alignItems: "center",
    },
    copyrightText: {
        color: "white",
        fontSize: 12,
        fontFamily: "Montserrat-SemiBold",
        textAlign: "center",
    },
    forgotPassContainer: {
        alignItems: 'center',
        marginTop: hp(10.5),
    },
    forgotPassText: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        textAlign: 'center',
    },
});

export default Login;