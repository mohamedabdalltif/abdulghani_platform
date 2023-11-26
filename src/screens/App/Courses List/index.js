import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import Header from './components/Header'
import LectureCard from './components/LectureCard'
import { useAppDispatch, useAppSelector } from 'store/store'
import AppThunks from 'store/app/thunks'
import { selectUserData } from 'store/auth'
import { live, Logo, Logo2 } from '../../../assets/Images'
const CoursesListScreen = ({navigation,route}) => {
    const dispatch = useAppDispatch()
    const {subject_id}=route.params
    const [chains, setChains] = useState([])

    useEffect(() => {
        console.log(subject_id)
        dispatch(AppThunks.doSelect_chain({
            subject_id:subject_id
        })).then((res) => {
            console.log(res.payload.message)
            setChains(res.payload.message)
        })
    }, [])
    return (
        <SafeAreaView style={styles.Container}>
            <Header />
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 30,paddingHorizontal:20 }}
                columnWrapperStyle={{ justifyContent: 'space-between', marginTop: 15 }}
                data={chains}
                renderItem={({ item,index }) => (
                    <LectureCard item={item} index={index} />
                )}
            />
        </SafeAreaView>
    )
}

export default CoursesListScreen