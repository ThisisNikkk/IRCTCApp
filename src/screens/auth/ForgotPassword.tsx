import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, ActivityIndicator, Pressable, TextInput, Image, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../utils/dimension';
import AppRoutes from '../../routes/RouteKeys/appRoutes';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/Reducers/userData';

interface ForgotPasswordProps {
    navigation: any,
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const image = require('../../assets/Vector.png');
    const bg = require('../../assets/Subtract.png');
    const googlelogo = require('../../assets/google.png')
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [password, setPassword] = useState(""); // <-- Suggestion 3: Success state
    const [loading, setLoading] = useState(false);


    const handlePasswordReset = async () => {
        setErrorMessage("");
        setSuccessMessage("");
        if (!email.trim()) {
            setErrorMessage("Please enter your email address.");
            return;
        }

        setLoading(true);
        try {
            // await auth().sendPasswordResetEmail(email);
            setSuccessMessage("Password reset link sent! Please check your email inbox (and spam folder).");
        } catch (error: any) {
            if (error.code === "auth/user-not-found") {
                setErrorMessage("No user found with that email address.");
            } else if (error.code === "auth/invalid-email") {
                setErrorMessage("That email address is invalid!");
            } else {
                console.error(error);
                setErrorMessage("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

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
                            <Text style={styles.titleBold}>Forgot Your Password ?{'\n'} </Text>
                            <Text style={styles.titleNormal}>  No worries, we'll help you.</Text>
                        </Text>
                        <View style={styles.loginFormContent}>
                            {errorMessage ? (
                                <Text style={styles.errorText}>{errorMessage}</Text>
                            ) : null}
                            {successMessage ? (
                                <Text style={styles.successText}>{successMessage}</Text>
                            ) : null}
                            <TextInput
                                placeholder="Enter Your Regitered Email"
                                placeholderTextColor="#fff"
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                editable={!loading}
                            />
                            <TextInput
                                placeholder="Confirm Your Email"
                                placeholderTextColor="#fff"
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                editable={!loading}
                            />
                            <View style={styles.buttonContainer}>
                                <Pressable
                                    style={styles.loginButton}
                                    onPress={handlePasswordReset}
                                >
                                    {loading ? (
                                        <ActivityIndicator color="#fff" />
                                    ) : (
                                        <Text style={styles.loginButtonText}>Send Reset Link</Text>
                                    )}
                                </Pressable>
                            </View>
                            <View>
                                <Pressable
                                    style={styles.BackButton}
                                    onPress={() => navigation.goBack()}
                                >
                                    <Text style={styles.BackButtonText}>Go Back</Text>
                                </Pressable>
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
        paddingHorizontal: wp(4),
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
        marginTop: hp(4),
        fontFamily: "Montserrat-Medium",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop:hp(4),
    },
    input: {
        height: hp(6.5),
        marginTop: hp(2),
        paddingHorizontal: wp(4),
        borderRadius: 20,
        backgroundColor: "#626978ff",
        color: "white",
        fontFamily: "Montserrat-Regular",
    },
    loginButton: {
        paddingVertical: hp(2),
        paddingHorizontal: wp(22.5),
        borderRadius: wp(4),
        alignSelf: "center",
        backgroundColor: "#2475EE",
    },
    BackButton: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: hp(2),
        paddingVertical: hp(2),
        paddingHorizontal: wp(16),
        borderRadius: wp(4),
        backgroundColor: "white",
        alignItems: "center",
        marginHorizontal: wp(3.75)
    },
    loginButtonText: {
        color: "white",
        fontSize: wp(3.75),
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
    successText: {
        color: "#90EE90", // Light green for success
        textAlign: "center",
        marginBottom: 10,
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
        height: hp(2.4),
        width: wp(6),
        right: wp(5),
    },
    copyrightContainer: {
        marginVertical: hp(3),
        marginBottom: Platform.OS === "android" ? 10 : 20,
        alignItems: "center",
    },
    copyrightText: {
        color: "white",
        fontSize: wp(2.9),
        fontFamily: "Montserrat-SemiBold",
        textAlign: "center",
    },
    forgotPassContainer: {
        alignItems: 'center',
        marginTop: hp(10.5),
    },
    forgotPassText: {
        color: 'white',
        fontFamily: 'NataSans-SemiBold',
        fontSize: wp(3.75),
        textAlign: 'center',
    },
});

export default ForgotPassword;