import React, {type JSX, useState, useRef, useCallback, useEffect} from 'react';
import {
  type ViewStyle,
  type TextInput,
  type View,
  StyleSheet,
} from 'react-native';
import InputField from './PawfectInput';
import useDebounceFunction from '@hooks/useDebounceFunction';
import IconButton from '../buttons/IconButton';
import type {SvgProps} from 'react-native-svg';
import {horizontalScale, verticalScale} from '@shared/utils/helpers';
import {Theme} from '@shared/utils/themes';

interface SearchBarProps {
  placeholder?: string;
  onChangeText: (text: string) => void;
  icon?: SvgProps['name'] | 'filter';
  value: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  disabledStyle?: ViewStyle;
  buttonRef?: React.Ref<View>;
  delay?: number;
  runImmediately?: boolean;
}

export default function SearchBar({
  placeholder = 'Search...',
  onChangeText,
  icon = 'filter',
  value,
  onPress,
  delay,
  ...props
}: Readonly<SearchBarProps>): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const [localSearchValue, setSearchValue] = useState(value || '');

  const searchChange = (localValue: string) => {
    setSearchValue(localValue);
  };

  const onDebounceChangeHandler = useCallback(
    (handlerValue: string) => {
      onChangeText?.(handlerValue);
    },
    [onChangeText],
  );

  const debounceHandler = useDebounceFunction(
    (...args: unknown[]) => {
      const handlerValue = args[0] as string;

      onDebounceChangeHandler(handlerValue);
    },
    {
      delay,
    },
  );

  useEffect(() => {
    if (delay) {
      debounceHandler(localSearchValue);
    } else {
      onChangeText?.(localSearchValue);
    }
    return () => debounceHandler.cancel?.();
  }, [delay, debounceHandler, localSearchValue, onChangeText]);

  const handleIconPress = () => {
    inputRef.current?.clear();
    onChangeText?.('');
    setSearchValue('');
  };

  return (
    <InputField
      forwardRef={inputRef}
      placeholder={placeholder}
      onPress={onPress}
      onFocus={() => props.onFocus?.() ?? setIsFocused(true)}
      onBlur={() => props.onBlur?.() ?? setIsFocused(false)}
      isFocused={isFocused}
      value={localSearchValue}
      onChangeText={searchChange}
      containerStyle={styles.inputContainerStyle}
      rightComponent={
        <IconButton
          icon={icon}
          onPress={handleIconPress}
          buttonStyle={styles.iconStyle}
          height={verticalScale(30)}
          width={horizontalScale(20)}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: Theme.white,
  },
  iconStyle: {
    backgroundColor: Theme.secondary,
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(8),
    height: verticalScale(30),
    width: horizontalScale(30),
  },
});
