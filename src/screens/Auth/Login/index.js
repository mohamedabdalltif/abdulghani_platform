import React, { useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Form from './components/Form';
import { styles } from './style';
import i18n from 'src/i18n';
import { Text } from 'react-native';
import { useAppDispatch } from 'store/store';
import AuthSlice, { selectLang } from 'store/auth';
import { useSelector } from 'react-redux';
import RNRestart from 'react-native-restart';
import { t } from 'i18next';

const LoginScreen = () => {
    const lang = useSelector(selectLang)
    return (
        <SafeAreaView style={[styles.Container]}>
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                extraScrollHeight={Platform.OS == 'android' ? -100 : 0}
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <Form />
            </KeyboardAwareScrollView>
        </SafeAreaView >
    )
}

export default LoginScreen

