import React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
export class Home extends React.Component {

state = {
  user: ''
}

    render() {
      const { user } = this.state;
      return (
          <View style={styles.container}>
        <Text style={styles.h1}>Cliquez pour commencer</Text>

        <TextInput style={styles.input}
          value={user}
          placeholder="pseudo"
          onChangeText={text=>{
          this.setState({ user: text })
          }}
        />
        <Button style={styles.button}
        title="commencez !"
        onPress={()=> {Actions.chat({user});}} // permet d'afficher la page suivante et d'envoyer la valeur user
        color="#F0F"
        />
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

    h1: {
      color: 'blue',
      fontSize: 20
    },
    
    input: {
      backgroundColor: "#F0F",
      borderColor: "blue",
      borderStyle: "solid",
      borderWidth: 1,
      margin: 8,
      padding: 3,
      width: '100%',
      
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