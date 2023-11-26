import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.lwhite,
    borderRadius:10,
  },
  Title: {
    fontFamily: 'Brandon Grotesque',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 15,
  },
  InputStyle: {
    height: 49,
    color: colors.black
  },
  error: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 5,
    textAlign: 'center',
    color: colors.Red,
  },
});
