import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import PdfScreen from './src/screen/PdfScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PdfScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
