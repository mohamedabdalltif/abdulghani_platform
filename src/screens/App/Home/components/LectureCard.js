import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeStyle } from '../styles'
import { useNavigation } from '@react-navigation/native'
import { colors } from 'theme/colors'

const LectureCard = ({ img, index,item }) => {
    const { navigate } = useNavigation()
    return (
        <TouchableOpacity activeOpacity={.8} onPress={()=>navigate('CoursesListScreen',{subject_id:item.subject_id})} style={HomeStyle.LectureCardContainer}>
            {/* <View> */}
                <Image style={HomeStyle.CardImage} source={ img } />
               
            {/* </View> */}
            <View style={HomeStyle.con}>
                <Text style={HomeStyle.LectureTitle}>{`${item.subject_name} ${index + 1}`}</Text>
                <Text numberOfLines={3} style={HomeStyle.describtion}>{item.subject_description}</Text>
                {/* <Text style={HomeStyle.Date}>27 jan 2020</Text> */}
            </View>
        </TouchableOpacity>
    )
}

export default LectureCard