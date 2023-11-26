import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import LottieView from 'lottie-react-native';
import { ButtonLoading } from 'assets/lotties';
import { colors } from 'theme/colors';

function Button({
  fill,
  title,
  onPress,
  style,
  Icon,
  loading,
  disabled
}: {
  fill?: boolean;
  title: string;
  onPress: any
  style?: any;
  Icon?: any
  loading?: boolean;
  disabled?: any
}) {
  return (
    <>
      <TouchableOpacity disabled={loading || disabled} onPress={onPress}
        style={[
          styles.Container,
          {
            backgroundColor: fill ? colors.Red : colors.white,
            borderColor: fill ? colors.Red : colors.black,
          },
          style
        ]}>
        {loading ?
          <LottieView
            autoPlay
            loop
            source={ButtonLoading}
            style={styles.Loader}
          />
          :
          <Text
            style={[
              styles.Title,
              { color: fill ? colors.white : colors.black, },
            ]}>
            {title}
          </Text>}
        {Icon}
      </TouchableOpacity>
    </>
  );
}

export default Button;
