import React from 'react';
import { Text, View, StyleSheet, FlatList, Button, TextInput } from 'react-native';
import { MessageItem } from './MessageItem';

const messages = [
  {
    content: 'Message 1',
    author: 'robert',
    created_at: new Date()
  },
  {
    content: 'Message 2',
    author: 'marie',
    created_at: new Date()
  },
  {
    content: 'Message 3',
    author: 'robert',
    created_at: new Date()
  }
];
export class Chat extends React.Component {
    render() {
      const { user, room } = this.props;
      
      return (
        <View style={styles.container}>
          <Text>{user}</Text>
          <FlatList
          style={styles.list}
          data={messages.map((message, i) => ({ ...message, key: 'message_${i}'}) )}
          renderItem={({ item: message })=>
          <MessageItem user={user} message={message}/>
          }/>
          <View style={styles.AreaSendMessage}>
          <TextInput style={styles.inputChat}></TextInput>
          <Button title="send"></Button>
        </View>
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
    list: {
      flex: 1
    },
    AreaSendMessage: {
      backgroundColor: '#DDD',
      flexDirection: 'row',
      flex: 0
    },
    inputChat: {
      backgroundColor: "#F0F",
      borderColor: "blue",
      borderStyle: "solid",
      borderWidth: 1,
      margin: 8,
      paddingLeft: 8,
      paddingRight: 8,
      width: '80%',
      flex: 1,
      
    }
  });