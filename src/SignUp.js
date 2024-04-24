import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './css/SignUp';
import WelcomePage from './WelcomePage'; // Импортируем страницу, на которую хотим перейти
import { useNavigation } from '@react-navigation/native'; // Импортируем хук навигации из React Navigation

const SignUpWithEmailScreen = () => {
    const navigation = useNavigation();

    const handleContinue = () => {
        
       navigation.navigate('Success');
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible] = useState(false);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"}
            style={styles.container}
        >
            <Text style={styles.title}> Registration</Text>
            <View style={styles.content}>
                <TextInput
                    style={styles.inputEmail}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!isPasswordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <Text style={styles.termsText}>
                    By continuing, you accept the terms of the user agreement and privacy policy
                </Text>
                <TouchableOpacity style={styles.continueButton} >
                    <Text style={styles.continueButtonText} onPress={handleContinue}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

  
export default SignUpWithEmailScreen;
