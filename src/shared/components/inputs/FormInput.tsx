import React, {type JSX, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import InputField from './PawfectInput';
import IconButton from '../buttons/IconButton';
import Caption from '../Text/Caption';
import {horizontalScale, If} from '@shared/utils/helpers';
import textCompVariant from '@shared/utils/text';
import {Theme} from '@shared/utils/themes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {SHAKE_OFFSET} from '@shared/utils/constant';

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

  const offset = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const handlePress = () => {
    offset.value = withRepeat(
      withTiming(SHAKE_OFFSET, {duration: 100}),
      5,
      true,
    );
  };

  return (
    <Animated.View style={[containerStyle, style]}>
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
