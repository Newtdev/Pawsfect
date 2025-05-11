import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SVGWrapper from './shared/components/SVGWrapper';

function App(): React.JSX.Element {
  return (
    <View>
      <SVGWrapper name="logo" height={36} width={36} fill="red" />
      <Text>Great Shopping Experience</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
