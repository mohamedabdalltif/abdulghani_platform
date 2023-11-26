import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from 'theme/colors'
import { styles } from './styles'
import Header from './components/Header'
import Card from './components/Card'

const NotificationScreen = () => {
    const img = 'https://cdn2.rsc.org.uk/sitefinity/images/education/resources/bbc-live-lessons_35658d9d-61b4-4c9d-9293-25780a684da8.tmb-img-912.jpg?sfvrsn=23db2021_2'
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header />

            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.FlatListContainer}
                data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
                renderItem={({ item }) => (
                    <Card />
                )}
            />
        </SafeAreaView>
    )
}

export default NotificationScreen