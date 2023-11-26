import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import { styles } from './styles'
import Card from './components/Card'


const VideosScreen = ({navigation,route}) => {
    // const dispatch = useAppDispatch()
    const {videos}=route.params
    return (
        <>
            <SafeAreaView style={styles.Container} edges={['top']}>
                <Header />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.FlatListContainer}
                    data={videos}
                    renderItem={({ item }) => (
                        <Card item={item}/>
                    )}
                />
            </SafeAreaView>
        </>
    )
}

export default VideosScreen