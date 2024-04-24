import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleContinue = () => {
    // Here you would handle the password submission
    console.log('Password submitted');
    // You might want to navigate to another screen or authenticate the user
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <Icon name="arrow-back" size={30} color="#000" onPress={() => console.log('Back pressed')} />
        <Text style={styles.headerTitle}>Password</Text>
        <Icon name="ellipsis-vertical" size={30} color="#000" onPress={() => console.log('Menu pressed')} />
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <Icon 
          name={isPasswordVisible ? "eye-off" : "eye"} 
          size={30} 
          color="grey" 
          onPress={() => setIsPasswordVisible(!isPasswordVisible)} 
          style={styles.eyeIcon}
        />
        <TouchableOpacity onPress={() => console.log('Forgot Password')}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  eyeIcon: {
    position: 'absolute',
    right: 35,
    top: 35,
  },
  forgotPasswordText: {
    color: 'red',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: 'red',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PasswordScreen;