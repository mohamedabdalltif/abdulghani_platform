import React, { useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Form from './components/Form';
import { styles } from './style';
import { useRoute } from '@react-navigation/native';
import { useAppDispatch } from 'store/store';
import AuthSlice from 'store/auth';

const OTPScreen = () => {
    const { code } = useRoute().params
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(AuthSlice.changeDone(false))
    },[])
    return (
        <SafeAreaView style={styles.Container}>
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                extraScrollHeight={Platform.OS == 'android' ? -100 : 0}
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <Form code={code}/>
            </KeyboardAwareScrollView>
        </SafeAreaView >
    )
}

export default OTPScreen

