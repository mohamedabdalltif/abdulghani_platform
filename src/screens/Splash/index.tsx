import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from 'theme/colors'
import { AppLogo } from 'assets/Images'
// import { selectUserLogin } from 'store/auth';
// import { useNavigation } from '@react-navigation/native';
// import { useAppSelector } from 'store/store';
const SplashScreen = () => {
    // const { navigate, goBack } = useNavigation<any>()
    // const Login = useAppSelector(selectUserLogin)
    // useEffect(() => {
    //     // console.log(Login)
    //     if (Login)
    //         navigate("App")
    //     else
    //         navigate("Auth")

    // }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            paddingHorizontal: 20
        }}>
            <Image
                source={AppLogo}
                style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain'
                }}
            />
        </SafeAreaView>
    )
}

export default SplashScreen