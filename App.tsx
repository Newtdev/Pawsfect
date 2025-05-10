import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SVGWrapper from './src/shared/components/SVGWrapper';

function App(): React.JSX.Element {
  return (
    <View>
      <SVGWrapper name="logo" />
      <Text>Pawfect</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
