import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const [numpieceiden, setNumpieceiden] = useState('');
    const [email, setEmail] = useState('');
    const [passoword, setPassword] = useState('');
    const [passowordRepeat, setPassowordRepeat] = useState('');
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn("Register ");
    };

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };
    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed  ");
    };
    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
    };


    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>

            <CustomInput
                placeholder="Numéro pièce d'identité"
                value={numpieceiden}
                setValue={setNumpieceiden}
            />
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder="Mot de passe"
                value={passoword}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomInput
                placeholder="Confirmez mot de passe "
                value={passowordRepeat}
                setValue={setPassowordRepeat}
                secureTextEntry
            />
            <CustomButton text="Register" onPress={onRegisterPressed} />
            <Text style={styles.text}>By registering, you confirm that you accept our{' '}<Text style={styles.link} onPress={onTermsOfUsePressed}> terms of Use</Text> and{' '}<Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>

            <CustomButton
                text="J'ai un compte "
                onPress={onSignInPressed}
                type="TERTIARY" />
        </View >
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'

    },
});

export default SignUpScreen