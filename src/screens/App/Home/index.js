import { View, Text, ScrollView, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from 'theme/colors'
import Header from './components/Header'
import { HomeStyle } from './styles'
import LiveCard from './components/LiveCard'
import LectureCard from './components/LectureCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from 'store/store'
import AppThunks from 'store/app/thunks'
import { selectUserData } from 'store/auth'
import { live,Logo, Logo2 } from '../../../assets/Images'

const HomeScreen = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUserData)
    const [mySubject,setMysubject]=useState([])

    useEffect(() => {
        // console.log(user)
        dispatch(AppThunks.doSelect_Subject({
            student_id: user.student_id
        })).then((res) => {
            console.log(res.payload.message)
            setMysubject(res.payload.message)
        })
    }, [])
    // const img = 'https://cdn2.rsc.org.uk/sitefinity/images/education/resources/bbc-live-lessons_35658d9d-61b4-4c9d-9293-25780a684da8.tmb-img-912.jpg?sfvrsn=23db2021_2'
    return (
        <>
            <SafeAreaView edges={['top']} style={HomeStyle.Container}>
                <View style={HomeStyle.WhiteContainer}>
                    <Header />
                </View>
                <ScrollView style={HomeStyle.ScrollView}>
                    <LiveCard img={live} />

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 22,
                        marginBottom: 15
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '700',
                            color: colors.secblack
                        }}>Courses</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: colors.secblack,
                            textDecorationLine: 'underline'
                        }}>See more</Text>
                    </View>
                    <FlatList
                        data={mySubject}
                        style={{ marginBottom: 40 }}
                        renderItem={({ item,index }) => (
                            <LectureCard item={item} index={index} img={Logo2} />
                        )}
                    />
                </ScrollView>
            </SafeAreaView >
        </>

    )
}

export default HomeScreen