/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App() {
  console.log("ehllo")
  return (
    <View style = {styles.container}>
      <ImageBackground style = {{resizeMode:'contain'}} source={require('./myAsset/student.jpeg')}>
      <Text>
      </Text>

        <Image style={styles.imgstyle} source={require('./myAsset/student.jpeg')} />

      </ImageBackground>

    </View>
    );
}

const styles = StyleSheet.create({
 container:{
  position:'relative',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
 },
  imgstyle:{
  height:200,
  width:400,
  resizeMode:'cover',
 }
});

export default App;
