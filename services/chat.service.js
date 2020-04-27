import PouchDB from 'pouchdb-react-native'
import { getCurrentFrame } from 'expo/build/AR';

const REMOTE_DB = 'http://10.42.0.1:5984';

let db, currentUser, currentRoom, sync = null;

export const chatService ={
    join,
    sendMessage
}

    function join(user, room, onSync, onFail) {
        if(/^_/.test(room)){
            onFail('le nom ne peut pas commencer par "_"');
        }
        currentUser = user || 'Anonymous';
        currentRoom = room || 'general';
        db = new PouchDB(currentRoom);

        sync = db.sync(`${REMOTE_DB}/${room}`, {
            live: true,
            retry: true,
            continuous: true
        });
        sync.on('change', handleChange(onSync));
        sync.on('error', handleError(onFail));
        return listMessages();
    }

    function listMessages(){
        returndb.allDocs({
            include_docs:true,
        }).then(response => {
            return response.rows
            .map(row => row.doc)
            .sort((a, b) => a.created_at > b.created_at);
        });
    }

    function handleChange(callback){
        return change => {
            callback(change);
        }
    }

    function handleError(callback){
        return error => {
            callback(error);
        }
    }

    function sendMessage(message){
        messgage = { ...message, author: currentUser, created_at };
        return db.post(message).then(({id}) => ({
            ...message,
            id
        }));
    }