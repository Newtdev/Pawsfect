import {StyleSheet} from 'react-native';
import React from 'react';
import PawfectButton from './PawfectButton';
import SubHeader from '../Text/SubHeader';
import textCompVariant from '@shared/utils/text';
import {Theme} from '@shared/utils/themes';
import {
  horizontalScale,
  If,
  moderateScale,
  verticalScale,
} from '@shared/utils/helpers';
import type {PawfectButtonProps} from '@shared/types';
import Spinner from '../Spinner';

export enum ButtonTypeEnum {
  Default = 'Default',
  Primary = 'Primary',
  Secondary = 'Secondary',
}

const variantStyles = {
  [ButtonTypeEnum.Default]: {
    backgroundColor: Theme.primary.light,
  },
  [ButtonTypeEnum.Primary]: {
    backgroundColor: Theme.primary.default,
  },
  [ButtonTypeEnum.Secondary]: {
    backgroundColor: Theme.secondary,
  },
};

const VariantTextStyles = {
  [ButtonTypeEnum.Default]: {
    color: Theme.black,
  },
  [ButtonTypeEnum.Primary]: {
    color: Theme.white,
  },
  [ButtonTypeEnum.Secondary]: {
    color: Theme.black,
  },
};

interface ActionButtonProps {
  name: string;
  variant?: ButtonTypeEnum;
  leftComponent?: React.ReactElement;
  props?: PawfectButtonProps;
  onPress?: () => void;
  isLoading?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessible?: boolean;
  disabled?: boolean;
}

export default function ActionButton({
  name,
  variant = ButtonTypeEnum.Default,
  leftComponent,
  isLoading = false,
  accessibilityLabel,
  accessibilityHint,
  accessible = true,
  disabled = false,
  ...props
}: Readonly<ActionButtonProps>): React.JSX.Element {
  return (
    <PawfectButton
      buttonStyle={[buttonStyles.button, variantStyles[variant]]}
      accessibilityLabel={accessibilityLabel ?? name}
      accessibilityHint={accessibilityHint}
      accessible={accessible}
      accessibilityRole="button"
      accessibilityState={{disabled: disabled, busy: isLoading}}
      {...props}>
      <>
        <If condition={leftComponent}>{leftComponent}</If>
        <SubHeader
          variant={textCompVariant.subheaderLarge}
          textStyle={VariantTextStyles[variant]}>
          {name}
        </SubHeader>
        <If condition={isLoading}>
          <Spinner color={VariantTextStyles[variant].color} />
        </If>
      </>
    </PawfectButton>
  );
}

export const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: moderateScale(36),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 6,
    alignItems: 'center',
    height: verticalScale(56),
    width: horizontalScale(350),
    paddingVertical: verticalScale(1),
    paddingHorizontal: horizontalScale(16),
  },
});
