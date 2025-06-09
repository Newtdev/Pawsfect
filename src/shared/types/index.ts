import type {ReactElement, Ref} from 'react';
import type {
  TouchableOpacityProps,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

type FontWeightStyle =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type TextVariantStyle = {
  fontSize: number;
  fontFamily: string;
  fontWeight: FontWeightStyle;
  lineHeight?: number;
  fontStyle?: 'normal' | 'italic';
};

export type IconName = 'notification' | 'logo' | 'filter' | 'chevronLeft';

export type ViewPropsType = StyleProp<ViewStyle>;
export type TextPropsType = StyleProp<TextStyle>;

export interface PawfectButtonProps extends TouchableOpacityProps {
  children: ReactElement;
  containerStyle?: ViewPropsType;
  buttonStyle?: ViewPropsType;
  disabledStyle?: ViewPropsType;
  buttonRef?: Ref<View>;
  disabled?: boolean;
  onPress?: () => void;
}

export type FontKey =
  | 'thinItalic'
  | 'thin'
  | 'extraLight'
  | 'extraLightItalic'
  | 'light'
  | 'lightItalic'
  | 'italic'
  | 'regular'
  | 'medium'
  | 'mediumItalic'
  | 'semiBold'
  | 'semiboldItalic'
  | 'bold'
  | 'boldItalic'
  | 'extraBold'
  | 'extraBoldItalic'
  | 'black'
  | 'blackItalic';
