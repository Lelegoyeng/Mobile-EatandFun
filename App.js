import React, { useEffect } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const image = require('./assets/images/home.png');

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.imageBackground}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text style={{ top: -100, left: 20 }}>
            Kategori
          </Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default App;
