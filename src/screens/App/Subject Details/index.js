import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from 'theme/colors'
import { Arrow, Profile } from 'assets/icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import Button from 'components/Button'

const SubjectDetailScreen = () => {
    const { goBack, navigate } = useNavigation()
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground style={styles.ImageBackground} imageStyle={styles.imageStyle} source={{ uri: 'https://cdn.ttgtmedia.com/rms/onlineimages/whatis-vector_vs_raster-f_mobile.png' }}>
                    <TouchableOpacity onPress={() => { goBack() }} activeOpacity={.8} style={styles.BackButton}>
                        <Arrow />
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styles.SecContainer}>
                    <Text style={styles.Title}>Courses title</Text>

                    <Text style={styles.Price}>1500 EGP</Text>


                    <View style={styles.RowBetween}>
                        <View style={styles.Row}>
                            <Profile fill={colors.Red} height={20} style={{ marginRight: 5 }} />
                            <Text style={styles.RollText}>12 enrolled students</Text>
                        </View>

                        <View style={styles.Row}>
                            <Profile fill={colors.Red} height={20} style={{ marginRight: 5 }} />
                            <Text style={styles.RollText}>12 hours</Text>
                        </View>
                    </View>

                    <Text style={styles.DescriptionTitle}>Description</Text>
                    <Text style={styles.Description}>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</Text>

                    <Button onPress={() => navigate('CoursesListScreen')} title='View videos' fill style={{ marginTop: 30, marginBottom: 40 }} />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default SubjectDetailScreen