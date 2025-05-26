import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SVGWrapper from './shared/components/SVGWrapper';
import Header from './shared/components/Text/Header';
import SubHeader from './shared/components/Text/SubHeader';
import Caption from './shared/components/Text/Caption';
import textCompVariant from '@shared/utils/text';

function App(): React.JSX.Element {
  return (
    <View>
      <SVGWrapper name="logo" height={36} width={36} fill="red" />
      <Text>Great Shopping Experience</Text>
      <Header />
      <SubHeader />
      <Caption variant={textCompVariant.captionThin} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
