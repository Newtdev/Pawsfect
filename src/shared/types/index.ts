import type {ReactElement, Ref} from 'react';
import type {
  TouchableOpacityProps,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

type FontWeightStyle = {
  fontWeight: string; // Or more specific type like 'bold' | 'normal' | '600' if known
};

// type TextVariantCategory = 'header' | 'subheader' | 'body' | 'caption';
// type TextVariantSize = 'Large' | 'Medium' | 'Small' | 'Thin';

// type TextVariantKey = `${TextVariantCategory}${TextVariantSize}`;

type TextVariantStyle = FontWeightStyle & {
  fontSize: number;
};

export type TextComponentVariants = {
  [x: string]: TextVariantStyle;
};

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
