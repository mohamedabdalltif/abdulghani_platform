import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { HomeStyle } from '../styles'
const LiveCard = ({ img }) => {
    return (
        <ImageBackground
            resizeMode='contain'
            source={img}
            style={HomeStyle.ImageBackgroundStyle}
            imageStyle={{ width: "100%", height: "100%" }
            }
        >
            <View style={HomeStyle.ShadowImage}>
                <View style={HomeStyle.Row}>
                    <Text style={HomeStyle.LiveText}>27 nov 2023</Text>
                    <Text style={HomeStyle.LiveText}>Student: 30</Text>
                </View>
                <View>
                    <Text style={HomeStyle.LiveText}>Started at: <Text style={{ fontWeight: '900', }}>03:20 pm</Text></Text>
                    <Text style={[HomeStyle.LiveText, { marginTop: 10 }]}>Ended at: <Text style={{ fontWeight: '900', }}>05:20 pm</Text></Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default LiveCard