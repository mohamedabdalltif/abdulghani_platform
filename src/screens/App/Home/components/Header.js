import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Bell, Search } from 'assets/icons'
import { colors } from 'theme/colors'
import { HomeStyle } from '../styles'
import { useNavigation } from '@react-navigation/native'
import { plus } from 'assets/Images'

const Header = () => {
    const  {navigate}=useNavigation()
    return (
        <View style={HomeStyle.HeaderContainer}>
            <View style={HomeStyle.HeaderRow}>
                <View>
                    <Text style={HomeStyle.HelloText}>Hello!</Text>
                    <Text style={HomeStyle.name}>Ahmed Elshahawy</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    navigate("AddSubscriptionScreen")
                }}><Image source={plus} style={{width:25,height:25,marginRight:-100}}/></TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigate("Notification")
                }}><Bell style={{marginLeft:-40}}/></TouchableOpacity>
                
            </View>

            <View style={HomeStyle.SearchContainer}>
                <Search />
                <TextInput
                    placeholder='Search'
                    placeholderTextColor={colors.border}
                    style={HomeStyle.Input}
                />
            </View>
        </View>
    )
}

export default Header