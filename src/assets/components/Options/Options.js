import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';

const styles = StyleSheet.create({
  logo: {},
});

function Options() {
  const [showMovie, setShowMovie] = useState({
    results: [],
  });

  const [showTop, setShowTop] = useState({
    results: [],
  });

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

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const options = {
      method: 'GET',
    };
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=ddb58f3a8207515a2180af172bcb3da2&language=en-US&page=1',
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

  const Top = showTop.results.map((film, index) => (
    <View key={index}>
      <Card>
        <View>
          <Card.Title>
            {film.name}
            {film.title}
          </Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.logo}
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + film.poster_path,
            }}
          />
        </View>
        <Text>Release date: {film.release_date}</Text>
      </Card>
    </View>
  ));

  useEffect(() => {
    getTop();
  }, []);

  function getTop() {
    const options = {
      method: 'GET',
    };
    fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=ddb58f3a8207515a2180af172bcb3da2',
      options,
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          if (data) {
            setShowTop(data);
          }
        },
        (error) => {
          console.log(error);
        },
      );
  }

  return (
    <View style={styles.content}>
      <View>
        <Text style={{margin: 10}}>Most Popular</Text>
        <ScrollView horizontal={true}>{show}</ScrollView>
      </View>
      <View>
        <Text style={{margin: 10}}>Top Rated</Text>
        <ScrollView horizontal={true}>{Top}</ScrollView>
      </View>
    </View>
  );
}

export default Options;
