import type {ViewPropsType} from '@shared/types';
import {If} from '@shared/utils/helpers';
import React, {type ReactElement, type JSX} from 'react';
import {View, StyleSheet} from 'react-native';
import Body from '../Text/Body';
import IconButton from '../buttons/IconButton';
import {buttons, screenHeaderStyle} from '../styles';
import {Theme} from '@shared/utils/themes';

interface ScreenTitleProps {
  title?: string;
  titleStyle?: ViewPropsType;
  containerStyle?: ViewPropsType;
  horizontalLine?: boolean;
  showBackButton?: boolean;
  rightContainer?: ReactElement;
}

export default function ScreenTitle({
  title = 'Title',
  containerStyle = {},
  rightContainer,
}: Readonly<ScreenTitleProps>): JSX.Element {
  return (
    <View
      style={[screenHeaderStyle.container, containerStyle]}
      accessible={true}
      accessibilityRole="header"
      accessibilityLabel={title}>
      <IconButton
        icon="chevronLeft"
        fill={Theme.black}
        height={15}
        width={15}
        buttonStyle={{
          ...buttons.iconButtonWithBorder,
          ...screenHeaderStyle.iconButton,
        }}
        accessibilityLabel="Go back"
        accessibilityRole="button"
        importantForAccessibility="yes"
      />
      <View
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={title}>
        <If condition={title}>
          <Body variant="bodyMedium" textStyle={screenHeaderStyle.title}>
            {title}
          </Body>
        </If>
      </View>

      <View
        style={screenTitleStyles.rightContainer}
        accessible={!!rightContainer}
        accessibilityRole={rightContainer ? 'button' : undefined}
        accessibilityLabel={rightContainer ? 'Actions' : undefined}>
        <If condition={rightContainer}>{rightContainer}</If>
      </View>
    </View>
  );
}

const screenTitleStyles = StyleSheet.create({
  rightContainer: {
    marginLeft: 'auto',
  },
});
