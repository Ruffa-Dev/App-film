import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Accueil from './assets/components/Accueil/Accueil';
import Options from './assets/components/Options/Options';

const styles = StyleSheet.create({});

function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: 'lightgrey',
          width: 150,
        }}
        initialRouteName="Accueil"
        openByDefault={false}
        drawerType="front">
        <Drawer.Screen name="Accueil" component={Accueil} />
        <Drawer.Screen name="Options" component={Options} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
