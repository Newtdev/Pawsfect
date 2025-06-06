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
  [x: string]: unknown;
}

export default function IconButton({
  buttonContainerStyle,
  buttonStyle,
  icon = 'notification',
  height = verticalScale(24),
  width = horizontalScale(24),
  ...props
}: Readonly<IconButtonProps>): JSX.Element {
  return (
    <PawfectButton
      containerStyle={buttonContainerStyle}
      buttonStyle={[buttons.iconButtonWithBorder, buttonStyle]}
      {...props}>
      <SVGWrapper name={icon} height={height} width={width} />
    </PawfectButton>
  );
}
