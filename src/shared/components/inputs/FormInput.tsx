import React, {type JSX, useState} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import InputField from './PawfectInput';
import IconButton from '../buttons/IconButton';
import Caption from '../Text/Caption';
import {horizontalScale, If} from '@shared/utils/helpers';
import textCompVariant from '@shared/utils/text';
import {Theme} from '@shared/utils/themes';

interface FormInputProps {
  placeholder?: string;
  label?: string;
  rightComponentHeading?: string;
  containerStyle?: object;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  inputTextStyle?: object;
  children?: React.ReactNode;
  accessibilityLabel?: string;
  error?: string;
  [key: string]: unknown;
}

export default function FormInput({
  placeholder = 'Placeholder',
  containerStyle = {},
  inputTextStyle = {},
  accessibilityLabel,
  error,
  ...props
}: Readonly<FormInputProps>): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const shakeAnimation = new Animated.Value(0);
  const onShake = () => {
    shakeAnimation.setValue(0);
    Animated.timing(shakeAnimation, {
      duration: 375,
      toValue: 3,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };
  const translateX = shakeAnimation.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [0, -15, 0, -15, 0, -15, 0],
  });
  return (
    <Animated.View style={[containerStyle, {transform: [{translateX}]}]}>
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
        accessibilityLabel={accessibilityLabel ?? placeholder}
        {...props}
      />
      <If condition={error}>
        <View style={styles.errorContainer}>
          <Caption
            variant={textCompVariant.captionMedium}
            textStyle={styles.error}>
            {error ?? ''}
          </Caption>
        </View>
      </If>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    padding: horizontalScale(10),
  },
  error: {
    color: Theme.error.default,
  },
});
