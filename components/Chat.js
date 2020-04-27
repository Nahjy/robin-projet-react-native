import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, FlatList, Button, TextInput } from 'react-native';
import { MessageItem } from './';
import { chatActions } from '../actions';


@connect(({ chat: {
  user,
  room,
  messages} 
}) => ({ user, room, messages }))

export class Chat extends React.Component {
  state = {
    content: ''
  }

  listEl = React.createRef();

  getData(){
    const { message } = this.props;
    return message.map((message, i ) => ({
      ...message, key: `message_${i}`
    }));
  }

  handleContentChange = content => {
    this.setState({ content });
  }
  handleSendPress = e =>{
    const { dispatch } = this.props;
    dispatch(chatActions.sendMessage({ content }));
  }
    render() {
      const { user } = this.props;
      const { content } = this.state;
      return (
        <View style={styles.container}>
        {error && <Text> Error : {error}</Text>}}
          <Text>{user}</Text>
          <FlatList
          style={styles.list}
          data={messages.map((message, i) => ({ ...message, key: 'message_${i}'}) )}
          renderItem={({ item: message })=>
          <MessageItem user={user} message={message}/>
          }
          ref={ref => this.listEl = ref}
          onContentSize={() => this.listEl.scrollToEnd({ animate: true})}
          onLayout={() => this.listEl.scrollToEnd({animated: true})}
          />
          <View style={styles.AreaSendMessage}>
          <TextInput style={styles.inputChat} value={content} onChangeText={this.handleContentChange}></TextInput>
          <Button title="send"
          onPress={this.handleSendPress}
          disabled={content == ''}
          ></Button>
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