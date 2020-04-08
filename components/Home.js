import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Home extends React.Component {
    render() {
      return (
          <View style={styles.container}>
        <Text>HomePage</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
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