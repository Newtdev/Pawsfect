import React from 'react';
import type {JSX, ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';

import type {ViewPropsType} from '@shared/types';
import {If} from '@shared/utils/helpers';
import {Theme} from '@shared/utils/themes';
import IconButton from '../buttons/IconButton';
import {buttons, screenHeaderStyle} from '../styles';
import Body from '../Text/Body';
import Caption from '../Text/Caption';

interface ScreenTitleProps {
  title: string;
  description: string;
  titleStyle?: ViewPropsType;
  descriptionStyle?: ViewPropsType;
  containerStyle?: ViewPropsType;
  showBackButton?: boolean;
  rightContainer?: ReactElement;
  onBackButtonPress?: () => void;
}

export default function ScreenHeaderDescription({
  title = 'Title',
  description = 'Description',
  containerStyle = {},
  rightContainer,
  showBackButton = true,
  onBackButtonPress,
}: Readonly<ScreenTitleProps>): JSX.Element {
  return (
    <View
      style={[screenHeaderStyle.container, containerStyle]}
      accessible={true}
      accessibilityRole="header"
      accessibilityLabel={`${title}. ${description}`}>
      {showBackButton && (
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
          onPress={onBackButtonPress}
        />
      )}
      <View
        style={screenTitleStyles.descritionContainer}
        accessible={true}
        accessibilityRole="text"
        accessibilityLabel={`${title}. ${description}`}>
        <If condition={title}>
          <Body
            variant="bodyMedium"
            textStyle={{
              ...screenHeaderStyle.title,
            }}
            accessibilityLabel={title}>
            {title}
          </Body>
        </If>
        <If condition={description}>
          <Caption
            variant="captionMedium"
            textStyle={{
              ...screenTitleStyles.description,
            }}
            accessibilityRole="text"
            accessibilityLabel={description}>
            {description}
          </Caption>
        </If>
      </View>
      <If condition={rightContainer}>{rightContainer}</If>
    </View>
  );
}

const screenTitleStyles = StyleSheet.create({
  description: {
    color: Theme.grey0,
  },

  descritionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 2,
  },
});
