import {ActivityIndicator} from 'react-native';
import React from 'react';

export default function Spinner(
  props: Readonly<React.ComponentProps<typeof ActivityIndicator>>,
): React.JSX.Element {
  return <ActivityIndicator {...props} />;
}
