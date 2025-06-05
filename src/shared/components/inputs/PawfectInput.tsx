import type {ViewPropsType} from '@shared/types';
import {horizontalScale, verticalScale, If} from '@shared/utils/helpers';
import textCompVariant from '@shared/utils/text';
import {Theme} from '@shared/utils/themes';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  type TextStyle,
} from 'react-native';
import {textInputStyles} from '../styles';

type InputFieldProps = {
  textInputStyle?: TextStyle;
  value?: string;
  isFocused?: boolean;
  forwardRef?: React.Ref<TextInput>;
  onPress?: () => void;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  leftContainerStyle?: ViewPropsType;
  containerStyle?: ViewPropsType;
  width?: number;
  height?: number;
  [key: string]: unknown;
};

function InputField({
  textInputStyle,
  value,
  isFocused = false,
  forwardRef,
  onPress,
  rightComponent,
  leftComponent,
  width = horizontalScale(327),
  height = verticalScale(54),
  containerStyle,
  ...props
}: Readonly<InputFieldProps>): React.JSX.Element {
  const COLOUR_SCHEME_PLACEHOLDER_COLOUR = Theme.grey2;
  const TEXT_STYLE = textCompVariant.captionLarge;

  const styles = textInputStyles(isFocused);

  return (
    <Pressable
      onPress={onPress}
      style={StyleSheet.flatten([styles.container, containerStyle])}>
      <If condition={leftComponent}>
        <View style={styles.leftIconContainer}>{leftComponent}</View>
      </If>
      <TextInput
        ref={forwardRef}
        onPressIn={onPress}
        value={value}
        style={
          {
            height,

            ...TEXT_STYLE,
            ...styles.textField,

            ...textInputStyle,
          } as TextStyle
        }
        placeholderTextColor={COLOUR_SCHEME_PLACEHOLDER_COLOUR}
        underlineColorAndroid="transparent"
        {...props}
      />
      <If condition={rightComponent}>
        <View style={styles.rightIconContainer}>{rightComponent}</View>
      </If>
    </Pressable>
  );
}

export default InputField;
