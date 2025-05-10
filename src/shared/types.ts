type FontWeightStyle = {
  fontWeight: string; // Or more specific type like 'bold' | 'normal' | '600' if known
};

type TextVariantCategory = 'header' | 'subheader' | 'body' | 'caption';
type TextVariantSize = 'Large' | 'Medium' | 'Small' | 'Thin';

type TextVariantKey = `${TextVariantCategory}${TextVariantSize}`;

type TextVariantStyle = FontWeightStyle & {
  fontSize: number;
};

export type TextComponentVariants = {
  [key in TextVariantKey]: TextVariantStyle;
};
