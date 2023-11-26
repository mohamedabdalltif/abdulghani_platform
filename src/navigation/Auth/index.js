import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen, ForgetPasswordScreen, OTPScreen } from 'screens/Auth';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectLang } from 'store/auth';
import { InitI18n } from 'src/i18n';


const AuthStack = createNativeStackNavigator();

const AuthStackScreens = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }
            }
            initialRouteName="Login"
        >
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Regist" component={RegisterScreen} />
            <AuthStack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
            <AuthStack.Screen name="OTP" component={OTPScreen} />
        </AuthStack.Navigator>

    );
};

export default AuthStackScreens;
