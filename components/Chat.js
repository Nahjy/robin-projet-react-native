import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
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
          data={messages.map((message, i) => ({ ...message, key: 'message_${i}'}) )}
          renderItem={({ item: message })=>
          <MessageItem user={user} message={message}/>
          }/>
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