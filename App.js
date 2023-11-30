import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {HeartIcon} from './src/components/HeartIcon';

const App = () => {
  const Icons = 8;
  return (
    <SafeAreaView style={styles.container}>
      {[...Array(Icons)].map((_, index) => (
        <HeartIcon key={index} />
      ))}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
