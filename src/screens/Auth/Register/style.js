import { StyleSheet } from 'react-native';
import { colors } from 'theme/colors';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  InputsContainer: {
    paddingHorizontal: 20,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  Title: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 10,
    textTransform: 'uppercase'
  },
  Button:{
    marginVertical:50,
     backgroundColor: colors.secblack,
      borderColor:colors.secblack
  }
});
