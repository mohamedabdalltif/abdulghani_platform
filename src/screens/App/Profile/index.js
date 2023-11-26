import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from 'theme/colors'
import { Logo } from 'assets/icons'
import { t } from 'i18next'
import Button from 'components/Button'
import AuthSlice, { selectUserData } from 'store/auth';
// import DeviceInfo from 'react-native-device-info';
import AuthThunks from 'store/auth/thunks';
import { useSelector } from 'react-redux';
import { useLoadingSelector } from 'store/selectors';
import { useAppDispatch,useAppSelector } from 'store/store'



const MainProfileScreen = () => {
    const dispatch=useAppDispatch()
    const user=useAppSelector(selectUserData)
    return (
        <SafeAreaView edges={['top']} style={{
            flex: 1,
            backgroundColor: colors.secblack,
        }}>
            <View style={{
                height: 50,
                width: '100%',
                backgroundColor: colors.secblack,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: colors.white
                }}>{t('Profile')}</Text>
            </View>
            <ScrollView style={{
                backgroundColor: colors.white,
            }}>


                <View style={{
                    paddingHorizontal: 15,
                    paddingTop: 15,
                    backgroundColor: colors.white
                }}>
                    <View style={{
                        width: '100%',
                        backgroundColor: colors.black,
                        borderRadius: 5,
                        alignItems: 'center',
                        paddingVertical: 20
                    }}>
                        <Image style={{
                            height: 90,
                            width: 90,
                            borderRadius: 90
                        }} source={{ uri: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' }} />
                        <Text style={{
                            color: colors.white,
                            paddingTop: 25,
                            fontWeight: '600'
                        }}>{t('StudentCode')}: 20489</Text>
                        <Text style={{
                            color: colors.white,
                            paddingTop: 10,
                            fontWeight: '500'
                        }}>{t('SubscribtionEndDate')}: 12/1/2024</Text>
                    </View>
                </View>

                <FlatList
                    style={{ paddingHorizontal: 15, marginBottom: 40 }}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginTop: 15 }}
                    numColumns={2}
                    data={[{ name: t('Solved Exams'), color: "#dddd" }, { name: t('Language'), color: "#dddd" }]}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <View style={{
                                    height: 120,
                                    width: '47%',
                                    backgroundColor: item?.color,
                                    borderRadius: 10,
                                    alignItems: 'flex-start'
                                }}>
                                    <Logo height={70} />
                                    <Text style={{
                                        paddingLeft: 15,
                                        color: colors.white,
                                        fontWeight: '700',
                                        fontSize: 17
                                    }}>{item?.name}</Text>
                                </View>
                            </>
                        )
                    }}
                />
                <Button style={{
                    width: "90%",
                    alignSelf: "center",
                    backgroundColor: colors.black,
                    borderColor: colors.black
                }}
                    title='Logout'
                    fill
                    onPress={()=>{
                        dispatch(AuthSlice.logout())
                    }}

                />
            </ScrollView>



        </SafeAreaView>
    )
}

export default MainProfileScreen