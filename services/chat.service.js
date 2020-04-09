import PouchDB from 'pouchdb-react-native'
import { getCurrentFrame } from 'expo/build/AR';

let db, currentUser, currentRoom = null;

export const chatService ={
    join,
    sendMessage
}

    function join(user, room) {
        user = null
        room = null
        db = null

        return db.allDocs({
            include_docs: true,
        }).then(response => response.rows.maps(row => row.doc)
        .sort((a, b) => a.created_at > b.created_at));
    }

    function sendMessage(message){
        messgage = { ...message, author: currentUser, created_at };
        return db.post(message).then(({id}) => ({
            ...message,
            id
        }));
    }