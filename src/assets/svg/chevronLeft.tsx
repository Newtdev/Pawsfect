import React, {type JSX} from 'react';
import Svg, {Path, type SvgProps} from 'react-native-svg';

export default function chevronLeft({
  fill = '#319039',
  ...props
}: SvgProps): JSX.Element {
  return (
    <Svg width="6" height="12" viewBox="0 0 6 12" fill="none" {...props}>
      <Path
        d="M5.5 11L0.5 6L5.5 1"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
