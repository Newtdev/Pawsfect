import React, {type JSX, useState} from 'react';
import {View} from 'react-native';
import InputField from './PawfectInput';
import IconButton from '../buttons/IconButton';

interface FormInputProps {
  placeholder?: string;
  label?: string;
  rightComponentHeading?: string;
  containerStyle?: object;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  inputTextStyle?: object;
  children?: React.ReactNode;
  [key: string]: unknown;
}

export default function FormInput({
  placeholder = 'Placeholder',
  label = '',
  containerStyle = {},
  inputTextStyle = {},
  ...props
}: Readonly<FormInputProps>): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={containerStyle}>
      <InputField
        placeholder={placeholder}
        onFocus={() => props.onFocus ?? setIsFocused(true)}
        onBlur={() => props.onBlur ?? setIsFocused(false)}
        isFocused={isFocused}
        leftComponent={<IconButton name="notification" />}
        rightComponent={<IconButton name="notification" />}
        textInputStyle={{
          ...inputTextStyle,
        }}
        {...props}
      />
      {props.children}
    </View>
  );
}
