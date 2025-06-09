import React, {type JSX, useMemo, useCallback, type ReactElement} from 'react';
import {
  Keyboard,
  StatusBar,
  Pressable,
  type ViewStyle,
  type StyleSheet,
  type StyleProp,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {horizontalScale, If} from '@shared/utils/helpers';
import {ScrollView} from 'react-native-gesture-handler';
import {Theme} from '@shared/utils/themes';

interface ParentScrollViewProps {
  children: React.ReactNode;
  backgroundColour?: string;
  showsVerticalScrollIndicator?: boolean;
  noPadding?: boolean;
  containerStyle?: ViewStyle;
  onScroll?: () => void;
  enableAutomaticScroll?: boolean;
  onTouchParentView?: () => void;
  statusBarStyle?: 'light-content' | 'dark-content';
  screenTitle?: ReactElement;
}

export default function ParentScrollView({
  children,
  backgroundColour = Theme.primary.light,
  showsVerticalScrollIndicator = false,
  noPadding = false,
  containerStyle = {},
  onScroll = () => {},
  onTouchParentView = () => {},
  screenTitle,
}: Readonly<ParentScrollViewProps>): JSX.Element {
  const {top, bottom} = useSafeAreaInsets();

  const containerStyles = container();

  const parentStyleWithInsets = useMemo<ViewStyle>(
    () => ({
      ...(noPadding
        ? containerStyles.parent
        : containerStyles.parentWithPadding),
      paddingBottom: bottom,
      marginTop: top,
    }),
    [top, bottom, containerStyles, noPadding],
  );

  const onPressParentScrollView = useCallback(() => {
    Keyboard.dismiss();
    onTouchParentView?.();
  }, [onTouchParentView]);

  const onStartShouldSetResponder = useCallback(() => true, []);

  return (
    <>
      <StatusBar backgroundColor={'red'} translucent={!backgroundColour} />
      <KeyboardAwareScrollView
        style={parentStyleWithInsets}
        contentContainerStyle={containerStyle}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        disableScrollOnKeyboardHide={true}
        onScroll={onScroll}
        scrollEventThrottle={15}
        //bottomOffset={}

        onStartShouldSetResponder={onStartShouldSetResponder}
        ScrollViewComponent={ScrollView}>
        <Pressable
          onPress={onPressParentScrollView}
          style={containerStyles.parent}
          accessible={false}>
          <If condition={screenTitle}>{screenTitle}</If>
          {children}
        </Pressable>
      </KeyboardAwareScrollView>
    </>
  );
}

export const container = (
  backgroundColor: string = '',
): StyleSheet.NamedStyles<{[key: string]: StyleProp<unknown>}> => ({
  parent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor,
  },
  parentWithPadding: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: horizontalScale(14),
  },
});
