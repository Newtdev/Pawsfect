import React, {useMemo, type JSX} from 'react';
import {moderateScale, verticalScale} from '@shared/utils/helpers';
import type {ViewPropsType} from '@shared/types';
import PawfectButton from './PawfectButton';
import textCompVariant from '@shared/utils/text';
import {StyleSheet} from 'react-native';
import {Theme} from '@shared/utils/themes';
import Caption from '../Text/Caption';

export interface IconButtonProps {
  buttonContainerStyle?: ViewPropsType;
  chipButtonStyle?: ViewPropsType;
  content: string;
  [x: string]: unknown;
  excluded?: boolean;
}

export default function Chip({
  buttonContainerStyle,
  chipButtonStyle,
  content,
  excluded = false,
  ...props
}: Readonly<IconButtonProps>): JSX.Element {
  const style = useMemo(
    () =>
      excluded
        ? {
            borderColor: Theme.error.default,
            backgroundColor: Theme.error.transparent,
          }
        : {
            borderColor: Theme.primary.default,
            backgroundColor: Theme.primary.transparent,
          },
    [excluded],
  );

  // Accessibility label and state
  const accessibilityLabel = `${content}${excluded ? ', excluded' : ''}`;
  const accessibilityState = {selected: !excluded, disabled: !!props.disabled};

  return (
    <PawfectButton
      containerStyle={buttonContainerStyle}
      buttonStyle={[{...chipStyle.chip, ...style}, chipButtonStyle]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={accessibilityState}
      {...props}>
      <Caption
        variant={textCompVariant.captionSmall}
        textStyle={chipStyle.body}>
        {content}
      </Caption>
    </PawfectButton>
  );
}

const chipStyle = StyleSheet.create({
  chip: {
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(24),
    borderWidth: 1,
    borderRadius: moderateScale(16),
    height: verticalScale(31),
  },
  body: {
    color: Theme.grey0,
  },
});
