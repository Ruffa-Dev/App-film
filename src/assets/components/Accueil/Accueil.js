import React, {useEffect, useState} from 'react';
import Menu from '../Menu/Menu';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    margin: 5,
  },
  body: {
    flex: 8,
    margin: 5,
  },
  codeText: {
    margin: 5,
    width: 200,
  },
  button: {
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Accueil() {
  const [showMovie, setShowMovie] = useState({
    results: [],
  });

  const [input, setInput] = useState('');

  const handleInput = (name, value) => {
    setInput({...input, [name]: value});
  };

  function coucou() {
    console.log('coucou' + ' ' + input);
  }

  useEffect(() => {
    getData();
  }, []);

  const show = showMovie.results.map((movie, index) => (
    <View key={index}>
      <Card>
        <View>
          <Card.Title>
            {movie.name}
            {movie.title}
          </Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.logo}
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            }}
          />
        </View>
        <Text>Release date: {movie.release_date}</Text>
      </Card>
    </View>
  ));

  function getData() {
    const options = {
      method: 'GET',
    };
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=ddb58f3a8207515a2180af172bcb3da2',
      options,
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          if (data) {
            setShowMovie(data);
          }
        },
        (error) => {
          console.log(error);
        },
      );
  }

  return (
    <View style={styles.menu}>
      <Menu />
      <View style={styles.row}>
        <View style={styles.view}>
          <Text>Email</Text>
          <TextInput
            style={styles.codeText}
            onChangeText={(value) => {
              handleInput(value, 'email');
            }}
            name="email"
            value={input.email}
          />
          <Text>Password</Text>
          <TextInput
            style={styles.codeText}
            onChangeText={(value) => {
              handleInput(value, 'password');
            }}
            name="password"
            value={input.password}
          />
          <TouchableOpacity style={styles.button} onPress={coucou}>
            <Text style={{padding: 10}}> Log In </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView horizontal={false}>{show}</ScrollView>
      </View>
    </View>
  );
}

export default Accueil;
