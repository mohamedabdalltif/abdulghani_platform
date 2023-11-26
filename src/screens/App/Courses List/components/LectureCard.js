import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Liked } from 'assets/icons'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'

const LectureCard = ({item, index }) => {
    const { navigate } = useNavigation()
    const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtihbPXVACkbmtfwWSPvi2XWW2kL1W2bQMygCY5T1388jJh-vxhQIcmAjZknnaicCxi1I&usqp=CAU'
    return (

        <TouchableOpacity
            onPress={() => navigate('Videos',{videos:item.videos})}
            activeOpacity={.8} style={styles.CardContainer}>
            <Image source={{ uri: img }} style={styles.Image} />
            <View style={styles.TextConatiner}>
                <View style={styles.Row}>
                    <Text style={styles.LessonName}>{`${item.chain_name}`}</Text>
                    {/* <Liked /> */}
                </View>
                <View style={styles.Row}>
                    <Text  numberOfLines={1} style={styles.ClassText}>{item.description}</Text>
                    {/* <Text style={styles.LectureText}>Lectures: 4</Text> */}
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default LectureCard