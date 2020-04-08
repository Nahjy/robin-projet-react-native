import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Home extends React.Component {
    render() {
      return (
          <View style={styles.container}>
        <Text style={styles.h1}>HomePage</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
      color: 'blue',
      fontSize: 20
    }
  });
  
  /************************************
   * home.js
   * 
   * export default class home.....
   * 
   * //index.js
   * 
   * export {default as Home} from './Home';
   * 
   * sinon regarder comme c'est fait exactement, c'est a dire enlever le default et voir index.js
  ************************************/