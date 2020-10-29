import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});

function Menu() {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text> My App</Text>
      </View>
    </View>
  );
}

export default Menu;
