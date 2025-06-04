import React from 'react';
import Svg, {Path, type SvgProps} from 'react-native-svg';

export default function Notification(props?: Readonly<SvgProps>) {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        d="M16.6944 8.52392V13C16.6944 13.8251 16.3667 14.6165 15.7832 15.1999C15.1998 15.7834 14.4084 16.1111 13.5833 16.1111H5.41665C4.59153 16.1111 3.80021 15.7834 3.21677 15.1999C2.63332 14.6165 2.30554 13.8251 2.30554 13V6.00003C2.30554 5.17491 2.63332 4.38359 3.21677 3.80014C3.80021 3.21669 4.59153 2.88892 5.41665 2.88892H10.9785"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.30554 6.07007L7.94443 9.28229C8.41579 9.56 8.9529 9.70646 9.49999 9.70646C10.0471 9.70646 10.5842 9.56 11.0555 9.28229L12.7814 8.30462"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.9444 5.99997C16.0183 5.99997 16.8889 5.12942 16.8889 4.05553C16.8889 2.98164 16.0183 2.11108 14.9444 2.11108C13.8706 2.11108 13 2.98164 13 4.05553C13 5.12942 13.8706 5.99997 14.9444 5.99997Z"
        stroke="black"
      />
    </Svg>
  );
}
