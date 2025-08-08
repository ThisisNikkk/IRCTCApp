import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, ActivityIndicator, Pressable, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '../../utils/dimension';

interface SignUpProps{
    navigation:any,
}

const SignUp : React.FC<SignUpProps> = ({ navigation }) => {
    const image = require('../../assets/Vector.png');
    const bg = require('../../assets/Subtract.png');
    const [name, setName] = useState("");
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
                                placeholder="Name"
                                placeholderTextColor="#fff"
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                editable={!loading}
                            />
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
                            <TextInput
                                placeholder="Confirm Password"
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
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <ActivityIndicator color="#fff" />
                                    ) : (
                                        <Text style={styles.loginButtonText}>Create Account</Text>
                                    )}
                                </Pressable>
                            </View>
                            <View>
                                <Pressable
                                    style={styles.BackButton}
                                    onPress={() => navigation.goBack()}
                                    disabled={loading}
                                >
                                    <Text style={styles.BackButtonText}>Go Back</Text>
                                </Pressable>
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
        paddingHorizontal: wp(5),
    },
    loginFormBackground: {
        width: "100%",
        height: hp(75),
        maxWidth: 400,
        opacity:1,
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
        paddingHorizontal: wp(14),
        borderRadius: 16,
        alignSelf: "center",
        backgroundColor: "#2475EE",
    },
    BackButton: {
        marginTop: hp(2),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(10),
        borderRadius: 30,
        alignSelf: "center",
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    loginButtonText: {
        color: "white",
        fontFamily: "NataSans-Bold",
        textAlign: "center",
    },
    BackButtonText: {
        color: "black",
        fontFamily: "NataSans-Bold",
        textAlign: "center",
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
});

export default SignUp;