import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import { colors } from '../../theme';
import { Eye, EyeSlash } from '../../assets/icons';

export default function Input({
  Label,
  values,
  placeholder,
  touched,
  errors,
  handleChange,
  style,
  handleBlur,
  country_cc2,
  small,
  secureTextEntry,
  ...props
}: {
  Label?: any;
  small?: boolean
  values: any;
  handleChange: any;
  handleBlur?: any;
  touched?: any;
  errors?: any;
  country_cc2?: any;
  secureTextEntry?: boolean;
} & TextInputProps) {
  const [secure, setSecure] = React.useState<boolean>(true)
  const [focus, setFocus] = React.useState<boolean>(false)
  return (
    <View style={{ width: small ? '45%' : '100%' }}>
      <Text style={styles.Title}>{Label}</Text>
      <View style={styles.Container}>
        <TextInput
          {...props}
          value={values[Label.replace("-", ' ').replace(/\s/g, '')]}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholderTextColor={colors.border}
          style={[styles.InputStyle, { width: secureTextEntry ? '87.5%' : '100%', }]}
          autoCapitalize='none'
          secureTextEntry={secureTextEntry ? secure : false}
          onChangeText={handleChange(Label.replace("-", ' ').replace(/\s/g, ''))}
        />
        {secureTextEntry && (
          !secure ?
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Eye />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <EyeSlash />
            </TouchableOpacity>)
        }
      </View>

      {errors[Label.replace("-", ' ').replace(/\s/g, '')] &&
        touched[Label.replace("-", ' ').replace(/\s/g, '')] && (
          <Text style={[styles.error]}>{errors[Label.replace("-", ' ').replace(/\s/g, '')]}</Text>
        )}
    </View>
  );
}
