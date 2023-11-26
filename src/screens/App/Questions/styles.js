import { StyleSheet } from "react-native";
import { colors } from "theme/colors";


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
    },
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    HeaderTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.secblack
    },
});