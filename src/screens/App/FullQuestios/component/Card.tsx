import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Exam } from '../../../../assets/icons'
import { styles } from '../styles'
import Header from './Header'
import { useNavigation } from '@react-navigation/native'

const Card = () => {
    const{navigate}=useNavigation<any>()
    return (
        <TouchableOpacity
        onPress={()=>{
            navigate("FullPageExam")
        }}
         style={styles.CardContainer}>
            
            <Exam height={80} width={80} style={styles.Logo} />
            <Text style={styles.CardTitle}>First Exam !</Text>
            <Text style={styles.cardDescription}>Topic: Example exam</Text>
            <Text style={styles.cardDescription}>Time Allowed: 30 min</Text>
            <Text style={styles.cardDescription}>Deadline: Thu, Nov 10 ,2023</Text>
        </TouchableOpacity>
    )
}

export default Card