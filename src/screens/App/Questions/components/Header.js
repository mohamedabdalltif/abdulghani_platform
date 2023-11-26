import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Arrow, Bell } from 'assets/icons'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const { goBack } = useNavigation()
    return (
        <View style={styles.HeaderContainer}>
            <TouchableOpacity activeOpacity={.8} onPress={() => goBack()}>
                <Arrow />
            </TouchableOpacity>
            <Text style={styles.HeaderTitle}>Questions</Text>
            <View style={{ width: 30 }} />
        </View>
    )
}

export default Header