import { StyleSheet } from "react-native";
import { colors } from "theme/colors";


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    HeaderTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.secblack
    },
    Lottie:{
        height: 350,
        width: '100%'
    },
    Title:{
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 18,
        color: colors.Red
    },
    Input:{
        height: 46,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        paddingLeft: 20,
        borderRadius: 5,
        borderColor: colors.border,
        marginTop: 35,
    },
    Button:{
        width: '90%',
        alignSelf: 'center',
        marginTop: 50,
    }
});