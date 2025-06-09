import {View, StyleSheet, type ViewStyle} from 'react-native';
import React from 'react';
import {Theme} from '@shared/utils/themes';
import IconButton from '../buttons/IconButton';
import {moderateScale} from '@shared/utils/helpers';
import {buttons} from '../styles';
import type {IconName, ViewPropsType} from '@shared/types';

interface RightHeaderContainerProps {
  leftIcon: IconName;
  rightIcon: IconName;
  containerStyle?: ViewPropsType;
  leftIconButtonStyle?: ViewStyle;
  rightIconButtonStyle?: ViewStyle;
}

export default function RightHeaderContainer({
  leftIcon,
  rightIcon,
  containerStyle = {},
  leftIconButtonStyle = {},
  rightIconButtonStyle,
}: Readonly<RightHeaderContainerProps>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <IconButton
        icon={leftIcon}
        height={15}
        width={15}
        buttonStyle={[
          {
            ...buttons.iconButtonWithBorder,
            ...leftIconButtonStyle,
          },
          styles.iconButton,
        ]}
      />
      <IconButton
        icon={rightIcon}
        fill={Theme.black}
        height={15}
        width={15}
        buttonStyle={[
          {
            ...buttons.iconButtonWithBorder,
            ...rightIconButtonStyle,
          },
          styles.iconButton,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    columnGap: moderateScale(15),
  },
  iconButton: {
    borderColor: Theme.black,
  },
});
