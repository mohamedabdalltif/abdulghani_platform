import { Text, TextInput, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import { styles } from './styles'
import LottieView from 'lottie-react-native'
import { Join } from 'assets/lotties'
import Button from 'components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const AddSubscriptionScreen = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.Container} >
            {/* <Header /> */}
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                extraScrollHeight={Platform.OS == 'android' ? 100 : -160}
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}>
                <LottieView
                    autoPlay
                    source={Join}
                    style={styles.Lottie}
                />
                <Text style={styles.Title}>Subscribe to our more courses </Text>
                <TextInput placeholder='Code' style={styles.Input} />
                <Button title='subscribe' fill style={styles.Button} />
            </KeyboardAwareScrollView>

        </SafeAreaView>
    )
}

export default AddSubscriptionScreen