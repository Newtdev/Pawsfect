import React, {type JSX} from 'react';
import SVGWrapper from '../SVGWrapper';
import {horizontalScale, verticalScale} from '@shared/utils/helpers';
import type {ViewPropsType} from '@shared/types';
import PawfectButton from './PawfectButton';
import {buttons} from '../styles';

type IconName = 'notification' | 'logo' | 'filter'; // Add all valid icon names here

export interface IconButtonProps {
  buttonContainerStyle?: ViewPropsType;
  buttonStyle?: ViewPropsType;
  icon?: IconName;
  colour?: string;
  height?: number;
  width?: number;
  accessibilityLabel?: string;
  accessible?: boolean;
  [x: string]: unknown;
}

export default function IconButton({
  buttonContainerStyle,
  buttonStyle,
  icon = 'notification',
  height = verticalScale(24),
  width = horizontalScale(24),
  accessibilityLabel,
  accessible = true,
  ...props
}: Readonly<IconButtonProps>): JSX.Element {
  return (
    <PawfectButton
      containerStyle={buttonContainerStyle}
      buttonStyle={[buttons.iconButtonWithBorder, buttonStyle]}
      accessibilityLabel={accessibilityLabel ?? `${icon} button`}
      accessible={accessible}
      {...props}>
      <SVGWrapper
        name={icon}
        height={height}
        width={width}
        accessibilityLabel={accessibilityLabel ?? `${icon} icon`}
        accessible={false}
      />
    </PawfectButton>
  );
}
