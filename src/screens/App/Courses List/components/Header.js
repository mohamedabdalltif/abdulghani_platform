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
                <Arrow fill={"#fff"} />
            </TouchableOpacity>
            <Text style={styles.HeaderTitle}>Math lecture</Text>
            <Bell fill={'#fff'} />
        </View>
    )
}

export default Header