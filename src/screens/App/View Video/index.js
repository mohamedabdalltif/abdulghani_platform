import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { colors } from 'theme/colors'
const { width, height } = Dimensions.get('window');
import Video from 'react-native-video';
import { Platform } from 'react-native'
import Orientation from 'react-native-orientation';
import { useNavigation } from '@react-navigation/native'
const ViewVideoScreen = ({route}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState()
    const [videoUrl, setvideoUrl] = useState()
    const [video, setVideo] = useState()
    const {navigate}=useNavigation()
    const{psData}=route.params;
    let translateY = Math.floor(
        Math.random() * (height - 40 - 0 + 1) + 0,
    );

    let translatex = Math.floor(
        Math.random() * (width - 160 - 0 + 1) + 0,
    );


    const [moveingIdLeft, setMoveingIdLeft] = React.useState(0)
    const [moveingIdUp, setMoveingIdUp] = React.useState(0)
    let injectVimeo = `
    setInterval(()=>{
      if (document.getElementsByClassName('js-password') == null) {
  
      } else {
        document.getElementsByClassName('js-password')[0].value = ${psData.video_pass};
        document.querySelector("input[type='submit']").click();
        var style = document.createElement('style');
        style.innerHTML = '${customCSS}';
        document.head.appendChild(style);
      }
    },1500)
    `;
    const customCSS = `
    iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

    useEffect(() => {
        Orientation.lockToLandscape();
    
    
       
    
        // };
        return () => {
          Orientation.lockToPortrait();
        };
      }, []);
    

    useEffect(() => {
        const VIMEO_ID = '849082442';
        fetch(`https://player.vimeo.com/video/${psData.video_player_id}/config`)
            .then(res => res.json())
            .then(res => {
                console.log(res.request.files.hls.cdns[res.request.files.hls.default_cdn].url)
                setThumbnailUrl(res.video.thumbs['640'])
                setvideoUrl(res.request.files.hls.cdns[res.request.files.hls.default_cdn].url)
                setVideo(res.video)
            }
                //     this.setState({
                //     thumbnailUrl: res.video.thumbs['640'],
                //     videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
                //     video: res.video,
                // })
            );
        setInterval(() => {
            setMoveingIdLeft(translateY)
            setMoveingIdUp(translatex)
        }, 5000)
    }, [])


    return (
        <SafeAreaView edges={['top']}>
            {/* <WebView
            style={{
                height: 200,
                maxWidth: '100%',
              }}
            // onError={onError}
            allowsFullscreenVideo
            scrollEnabled={false}
            automaticallyAdjustContentInsets
            source={{
              html: `
                <html>
                  <body>
                    <iframe src="https://player.vimeo.com/video/${849082442}" width="100%" height="200px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                  </body>
                </html>
              `,
            }}
          /> */}
          <View style={{
            height:"100%",
            width:"100%",
            backgroundColor:"red"
          }}>
            <WebView
                allowsFullscreenVideo={false}
                javaScriptEnabled={true}
                injectedJavaScript={injectVimeo}
                containerStyle={{flex:1}}
                source={{
                    uri: `https://player.vimeo.com/video/${psData.video_player_id}`
                }}
                style={{ height:"100%",
                width:"100%"
             }}
            
                
                // scalesPageToFit={true}

            />
            </View>
            {/* <Video source={{ uri: videoUrl }}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                //    onEnd={this.onEnd}                      // Callback when playback finishes
                //    onError={this.videoError}               // Callback when video cannot be loaded
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }} /> */}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    position: "absolute",
                    top: Platform.OS=="android"?10:60,
                    left: 5
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        Orientation.lockToPortrait();
                        navigate("FullPageExam")
                    }}
                    style={{
                        paddingHorizontal: 25,
                        backgroundColor: colors.secblack,
                        paddingVertical: 12, borderRadius: 25,
                        marginRight: 5

                    }}>
                    <Text
                        style={{
                            color: "#ffffff"
                        }}
                    >Questions</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        // console.log(this.state.videoDetails)
                        // this.backHandler.remove();
                        // Orientation.lockToPortrait()
                        // this.props.navigation.navigate('VideoComment', {
                        //     type: "video",
                        //     video_id: this.state.videoDetails.video_id
                        // });
                    }}
                    style={{
                        // position:"absolute"
                        paddingHorizontal: 25,
                        backgroundColor: colors.secblack,
                        paddingVertical: 12, borderRadius: 25,
                        marginRight: 5

                    }}>
                    <Text
                        style={{
                            color: "#ffffff"
                        }}
                    >
                        Comments
                    </Text>

                </TouchableOpacity>

                <View
                    style={{
                        position: 'absolute',
                        top: moveingIdUp,
                        left: moveingIdLeft,
                        paddingHorizontal: 10,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{ color: '#fff', }}>
                        {'1'} : {'ahmedd'}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ViewVideoScreen