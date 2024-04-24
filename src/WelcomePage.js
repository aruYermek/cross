import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpWithEmailScreen from './SignUp';
import Login from './Login';
import RegistrationSuccessScreen from './Succesfully';
import { styles } from './css/AppStyles.js'; 

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/backround.png')} 
        style={styles.backgroundImage}
      >
        <Text style={styles.title}> Welcome to Garden Elegance!</Text>
        <Text style={styles.subtitle}>Order your flower bouquet faster!</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
          <Text style={styles.buttonText}>            Sign Up            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>               Login             </Text>
        </TouchableOpacity>
        
      </ImageBackground>
    </View>
  );
};

const WelcomePage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpWithEmailScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Success" component={RegistrationSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WelcomePage;
