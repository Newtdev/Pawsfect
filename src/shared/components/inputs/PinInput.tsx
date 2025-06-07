import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@shared/utils/helpers';
import React, {
  forwardRef,
  type ForwardedRef,
  type JSX,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import {StyleSheet, type TextInput, View} from 'react-native';
import InputField from './PawfectInput';
import {Theme} from '@shared/utils/themes';
import Fonts from '@shared/utils/fonts';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {SHAKE_OFFSET} from '@shared/utils/constant';

interface State {
  focused: boolean;
  showError: boolean;
  showSuccess: boolean;
}

export interface PinInputProps {
  value: string;
  codeLength?: number;
  autoFocus?: boolean;
  cellWidth?: number;
  cellHeight?: number;
  error?: string;
  onFulfill?: (code: string) => void;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  success?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  pinLabelStyle?: object;
  cellFocusedStyle?: object;
  pinErrorMessage?: string;
  messageType?: 'default' | 'success' | 'warning' | 'error';
}

const PinInput = forwardRef(
  (props: PinInputProps, ref: ForwardedRef<TextInput>): JSX.Element => {
    const {
      value = '12345',
      codeLength = 5,
      autoFocus = true,
      cellWidth = 54,
      cellHeight = 54,
      error,
      onFulfill,
      onChangeText,
      secureTextEntry = false,
      success,
      onFocus = () => {},
      onBlur = () => {},
      cellFocusedStyle = {},
    } = props;

    const styles = pinInputStyles(cellWidth, cellHeight);

    const [state, setState] = useState<State>({
      focused: false,
      showError: false,
      showSuccess: false,
    });
    const offset = useSharedValue(0);
    const shakeStyle = useAnimatedStyle(() => ({
      transform: [{translateX: offset.value}],
    }));

    const handleShake = useCallback(() => {
      offset.value = withRepeat(
        withTiming(SHAKE_OFFSET, {duration: 100}),
        5,
        true,
      );
    }, [offset]);

    const handleFocus = useCallback(() => {
      onFocus();
      setState(prev => ({...prev, focused: true}));
    }, [onFocus]);

    const handleBlur = useCallback(() => {
      onBlur();
      setState(prev => ({...prev, focused: false}));
    }, [onBlur]);

    const handleInputChange = useCallback(
      (code: string) => {
        const sanitized = code.replace(/\D/g, '');
        onChangeText?.(sanitized);

        if (sanitized.length === codeLength) {
          onFulfill?.(sanitized);
        }
      },
      [codeLength, onChangeText, onFulfill],
    );

    useEffect(() => {
      if (error || success) {
        const type = error ? 'showError' : 'showSuccess';

        setState(prev => ({...prev, [type]: true}));
        handleShake();
      }
    }, [error, handleShake, success]);

    const renderCells = useMemo(
      () =>
        Array.from({length: codeLength}).map((_, index) => {
          const isFocused = state.focused && index === value.length;
          const forceFocus =
            value.length === codeLength && index === codeLength - 1;
          const cellFocused = isFocused || forceFocus;

          return (
            <View
              key={`pin-cell-${index + 1}`}
              style={[
                styles.inputField,
                cellFocused ? styles.cellFocusedDefault : null,
                state.showError ? styles.error : null,
                state.showSuccess ? styles.success : null,
                cellFocusedStyle,
              ]}>
              <InputField
                value={value[index] || ''}
                editable={false}
                secureTextEntry={secureTextEntry}
                textContentType="oneTimeCode"
                textInputStyle={styles.cellText}
                containerStyle={styles.inputFieldContainerStyle}
              />
            </View>
          );
        }),
      [
        codeLength,
        value,
        state.focused,
        state.showError,
        state.showSuccess,
        // getCellAnimation,
        styles,
        cellFocusedStyle,
        secureTextEntry,
      ],
    );

    return (
      <View style={[shakeStyle, styles.cellWrapperContainer]}>
        <Animated.View style={styles.cellWrapper}>{renderCells}</Animated.View>

        <InputField
          ref={ref}
          disableFullscreenUI={true}
          value={value}
          onChangeText={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
          keyboardType="number-pad"
          maxLength={codeLength}
          selection={{start: value.length, end: value.length}}
          secureTextEntry={secureTextEntry}
          spellCheck={false}
          returnKeyType="done"
          style={styles.textStyleRef}
          containerStyle={styles.inputFieldContainerStyle}
        />
      </View>
    );
  },
);

export default PinInput;

export const pinInputStyles = (cellWidth: number, cellHeight: number) =>
  StyleSheet.create({
    cellDefault: {
      borderColor: 'transparent',
      borderWidth: 1,
    },
    cellFocusedDefault: {
      borderColor: Theme.primary.default,

      borderWidth: 1,
    },
    error: {
      borderColor: Theme.error.default,
      borderWidth: 1,
    },
    success: {
      borderColor: Theme.primary.transparent,
      borderWidth: 1,
    },
    inputFieldContainerStyle: {
      backgroundColor: 'transparent',
    },
    inputField: {
      backgroundColor: Theme.primary.light,
      width: horizontalScale(cellWidth),
      height: horizontalScale(cellHeight),
      marginRight: horizontalScale(8),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(8),
    },
    textStyle: {
      color: 'yellow',
    },
    cellWrapperContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    cellWrapper: {
      position: 'absolute',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    textStyleRef: {
      height: horizontalScale(48),
      marginBottom: horizontalScale(20),
      flex: 1,
      opacity: 0,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cellText: {
      textAlign: 'center',
      color: Theme.primary.default,
      fontFamily: Fonts.bold?.fontFamily,
      fontWeight: Fonts.bold?.fontWeight as '700',
      fontStyle: Fonts.bold?.fontStyle,
    },
    screenTitleCenterContainer: {
      backgroundColor: 'white',
      paddingHorizontal: horizontalScale(16),
      width: '100%',
      paddingVertical: verticalScale(24),

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',

      shadowColor: '#000',
      shadowOffset: {
        width: -2,
        height: 4,
      },
      shadowOpacity: 0.12,
      shadowRadius: 20,
      elevation: 20,
    },
  });
