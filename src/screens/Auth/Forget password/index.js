import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Form from './components/Form';
import { styles } from './style';

const ForgetPasswordScreen = () => {
    return (
        <SafeAreaView style={styles.Container}>
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

export default ForgetPasswordScreen

