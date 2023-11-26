import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export const styles = StyleSheet.create({
  Container: {
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.Red,
    marginBottom: 10,
    flexDirection: 'row',
  },
  Title: {
    fontWeight: '800',
    marginRight: 7,
    color: colors.white,
    fontSize:15
  },
  Loader: {
    width: 85,
    height: 40
  }
});
