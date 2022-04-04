import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker';



const SignUpScreen = () => {
    const [matriculecnss, setMatriculecnss] = useState('');
    const [numpiecedient, setNumpiecedient] = useState('');
    const [selectedValue, setSelectedValue] = useState('CIN');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [numtel, setNumtel] = useState('');

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
            <Text style={styles.title}>Créer un compte </Text>

            <CustomInput
                placeholder="Matricule CNSS"
                value={matriculecnss}
                setValue={setMatriculecnss}
            />
            <CustomInput
                placeholder="Numéro pièce d'identité"
                value={numpiecedient}
                setValue={setNumpiecedient}
            />
            <Text style={styles.tpi}>Type pièce d'identité : </Text>
            <Picker
                selectedValue={selectedValue}
                style={styles.pick}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)}
            >
                <Picker.Item label='CIN' value='CIN' />
                <Picker.Item label='Passport' value='Passport' />
                <Picker.Item label='Carte séjour' value='Carte séjour' />
            </Picker>
            <DatePicker

                style={{ width: '100%' }}
                date={date}
                placeholder='select date'
                format='DD-MM-YYYY'
                confirmBtnText='Confirm'
                cancelBtnText='Cancel'
                onDateChange={(d) => setDate(d)}

            />

            <CustomInput
                placeholder="emaill"
                value={email}
                setValue={setEmail}
            />
            <CustomInput
                placeholder="Numéro de tel portable"
                value={numtel}
                setValue={setNumtel}
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
    pick: {
        height: 50,
        width: 150

    },
    tpi: {
        fontWeight: '500',
        alignSelf: 'flex-start',
        fontSize: 16,
        marginTop: 4,
        color: '#051C60',


    },

    title: {
        fontSize: 35,
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