import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import Button from 'components/Button'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'
import { live,Logo, Logo2 } from '../../../../assets/Images'
const Card = ({item}) => {
    const{navigate}=useNavigation()
    // const img = 'https://cdn2.rsc.org.uk/sitefinity/images/education/resources/bbc-live-lessons_35658d9d-61b4-4c9d-9293-25780a684da8.tmb-img-912.jpg?sfvrsn=23db2021_2'
//    useEffect(()=>{
//     console.log(item)
//    },[])
    return (
        <View style={styles.CardContainer}>
            <Image source={{uri:item.preview_video_link}} style={styles.Image} />
            <View style={styles.Row}>
                <Text numberOfLines={1} style={styles.videoTitle}>{item.video_title} </Text>
                <Text numberOfLines={2} style={{fontSize:14,color:"#000",marginBottom:10}}>{item.video_description} </Text>
                <Button style={styles.WatchButton}  fill title='Watch' onPress={()=>{
                    navigate("ViewVideoScreen",{psData:item})
                }}/>
            </View>
        </View>
    )
}

export default Card