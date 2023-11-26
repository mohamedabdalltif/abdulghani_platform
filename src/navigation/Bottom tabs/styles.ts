import { Dimensions, Platform, StyleSheet } from "react-native";
import { colors } from '../../theme';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarIcon:
    {
        position: 'absolute',
        top: 12,
        alignItems:"center"
    },
    Calculator:
    {
        width: 74,
        height: 74,
        backgroundColor: colors.secblack,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Platform.OS == "android" ? 50 : 30
    },
    tabBarStyle:
    {
        backgroundColor: colors.lwhite,
        height: 79
    },
    RequestsText: {
        fontSize: 10,
        color: colors.white,
        marginTop: 2,
        fontWeight: '500'
    }
});

export default styles