import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

export class MessageItem extends React.Component{
    render(){
        const { user, message } = this.props;
        const { id, content, author } = message;
        const isAuthor = user == author;

    return(
        <View style={[style.root, {
            alignSelf: isAuthor ? 'flex-end' : 'flex-start'
        }]}>
            <Text> { content } </Text>
            </View>
    )
}
}

const style = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });